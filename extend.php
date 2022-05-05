<?php

namespace FoF\Game;

use Flarum\Api\Controller\CreateUserController;
use Flarum\Api\Controller\ListPostsController;
use Flarum\Api\Controller\ListUsersController;
use Flarum\Api\Controller\ShowDiscussionController;
use Flarum\Api\Controller\ShowForumController;
use Flarum\Api\Controller\ShowUserController;
use Flarum\Api\Controller\UpdateUserController;
use Flarum\Api\Serializer\BasicUserSerializer;
use Flarum\Api\Serializer\ForumSerializer;
use Flarum\Api\Serializer\UserSerializer;
use Flarum\User\Filter\UserFilterer;
use Flarum\User\Search\UserSearcher;
use Flarum\User\User;
use FoF\Game\Api\Controllers as Api;
use Flarum\Extend;
use FoF\Game\Api\Serializers\AnswerSerializer;
use FoF\Game\Api\Serializers\FieldSerializer;
use FoF\Game\ServiceProvider\CustomServiceProvider;

return [
    // Other extenders
    (new Extend\ServiceProvider())
        ->register(CustomServiceProvider::class),
        
    (new Extend\Frontend('forum'))
        ->js(__DIR__ . '/js/dist/forum.js')
        ->css(__DIR__ . '/resources/less/forum.less'),

    (new Extend\Frontend('admin'))
        ->js(__DIR__ . '/js/dist/admin.js')
        ->css(__DIR__ . '/resources/less/admin.less'),

    (new Extend\Routes('api'))
        ->get('/game/fields', 'game.api.fields.index', Api\FieldIndexController::class)
        ->post('/game/fields/order', 'game.api.fields.order', Api\OrderFieldController::class)
        ->post('/game/fields', 'game.api.fields.create', Api\StoreFieldController::class)
        ->patch('/game/fields/{id:[0-9]+}', 'game.api.fields.update', Api\UpdateFieldController::class)
        ->delete('/game/fields[/{id:[0-9]+}]', 'game.api.fields.delete', Api\DeleteFieldController::class)
        ->get('/game/profile/{id:[0-9]+}', 'game.api.profile', Api\UserProfileController::class)
        ->get('/game/configure/{id:[0-9]+}', 'game.api.configure', Api\UserConfigureController::class)
        ->post('/game/configure/{id:[0-9]+}', 'game.api.configure.save', Api\UserConfigureController::class),

    (new Extend\Middleware('forum'))
        ->add(Middleware\DemandProfileCompletion::class),

    (new Extend\Locales(__DIR__ . '/resources/locale')),

    (new Extend\ApiController(ShowForumController::class))
        ->prepareDataForSerialization(LoadAllGameFieldsRelationship::class)
        ->addInclude('gameFields'),

    (new Extend\ApiController(ShowUserController::class))
        ->addInclude('bioFields.field')
        ->addInclude('gameAnswers'),

    (new Extend\ApiController(UpdateUserController::class))
        ->addInclude('bioFields.field')
        ->addInclude('gameAnswers'),

    (new Extend\ApiController(CreateUserController::class))
        ->addInclude('bioFields.field')
        ->addInclude('gameAnswers'),

    (new Extend\ApiController(ListUsersController::class))
        ->addInclude('bioFields.field')
        ->addInclude('gameAnswers'),

    (new Extend\ApiController(ListPostsController::class))
        ->addInclude('user.bioFields.field')
        ->addInclude('user.gameAnswers'),

    (new Extend\ApiController(ShowDiscussionController::class))
        ->addInclude('posts.user.bioFields.field')
        ->addInclude('posts.user.gameAnswers'),

    (new Extend\Model(User::class))
        ->relationship('bioFields', function (User $model) {
            return $model->hasMany(Answer::class)
                ->whereHas('field', function ($q) {
                    $q->where('on_bio', true);
                });
        })
        ->hasMany('gameAnswers', Answer::class),

    (new Extend\ApiSerializer(BasicUserSerializer::class))
        ->hasMany('bioFields', AnswerSerializer::class)
        ->hasMany('gameAnswers', AnswerSerializer::class)
        ->attributes(function (BasicUserSerializer $serializer, User $user): array {
            $actor = $serializer->getActor();

            if ($actor->cannot('fof.game.view-profile')) {
                // When the relationships are auto-loaded later,
                // this one will be skipped because it has already been set to null
                $user->setRelation('bioFields', null);
                $user->setRelation('gameAnswers', null);
            }

            return [];
        }),

    (new Extend\ApiSerializer(ForumSerializer::class))
        ->attributes(ForumAttributes::class)
        ->hasMany('gameFields', FieldSerializer::class),

    (new Extend\ApiSerializer(UserSerializer::class))
        ->attributes(UserAttributes::class),

    (new Extend\SimpleFlarumSearch(UserSearcher::class))
        ->addGambit(Gambits\AnswerGambit::class),

    (new Extend\Filter(UserFilterer::class))
        ->addFilter(Gambits\AnswerGambit::class),
];
