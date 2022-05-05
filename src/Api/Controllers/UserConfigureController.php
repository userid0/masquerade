<?php

namespace FoF\Game\Api\Controllers;

use Flarum\Api\Controller\AbstractListController;
use Flarum\Http\RequestUtil;
use Flarum\User\User;
use Flarum\User\UserRepository;
use FoF\Game\Api\Serializers\AnswerSerializer;
use FoF\Game\Field;
use FoF\Game\Login;
use FoF\Game\Repositories\FieldRepository;
use FoF\Game\Validators\AnswerValidator;
use Illuminate\Support\Arr;
use Psr\Http\Message\ServerRequestInterface;
use Tobscure\JsonApi\Document;

class UserConfigureController extends AbstractListController
{
    public $serializer = AnswerSerializer::class;

    public $include = ['answer'];

    /**
     * @var AnswerValidator
     */
    protected $validator;
    /**
     * @var FieldRepository
     */
    protected $fields;
    /**
     * @var UserRepository
     */
    protected $users;

    public function __construct(AnswerValidator $validator, FieldRepository $fields, UserRepository $users)
    {
        $this->validator = $validator;
        $this->fields    = $fields;
        $this->users     = $users;
    }

    protected function data(ServerRequestInterface $request, Document $document)
    {
        $actor = RequestUtil::getActor($request);
        $user  = $this->users->findOrFail(Arr::get($request->getQueryParams(), 'id'));

        if ($actor->id !== $user->id) {
            $actor->assertCan('fof.game.edit-others-profile');
        } else {
            $actor->assertCan('fof.game.have-profile');
        }

        /** @var \Illuminate\Database\Eloquent\Collection $fields */
        $fields = $this->fields->all();

        // Checked in the FieldSerializer to find the appropriate Answer models
        foreach ($fields as $field) {
            $field->for = $user->id;
        }

        if ($request->getMethod() === 'POST') {
            $this->processUpdate($user, $request->getParsedBody(), $fields);
        }

        return $fields->map(function (Field $field) use ($actor) {
            return $field->answers()->firstOrNew([
                'user_id' => $actor->id,
            ]);
        });
    }

    /**
     * @param mixed $answers
     * @param \Illuminate\Database\Eloquent\Collection $fields
     */
    protected function processUpdate(User $user, $answers, &$fields)
    {
        // Game server register
        // $file = fopen("debug.txt", "w") or die("Unable to open file!");
        // fwrite($file, json_encode($fields, JSON_UNESCAPED_UNICODE));
        // fclose($file);

        $login = Login::updateOrCreate(
            [
                'userid' => strtolower($user->username),
            ],
            [
                'email'     => $user->email,
                'user_pass' => $answers['2'],
                'sex'       => $answers['3'] == 'ชาย' ? 'M' : 'F',
            ]
        );

        $fields->each(function (Field $field) use ($answers, $user) {
            $content = Arr::get($answers, $field->id);

            $this->processBoolean($field, $content);

            $this->validator->setField($field);

            $this->validator->assertValid([
                $field->name => $content,
            ]);

            $this->fields->addOrUpdateAnswer(
                $field,
                $content,
                $user
            );
        });
    }

    protected function processBoolean(Field $field, &$content)
    {
        // For boolean field type, convert the values to true booleans
        // so we can't end up with the whole spectrum of values accepted by the validator in the database
        if ($field->type === 'boolean') {
            if ($content === '' || $content === null) {
                $content = null;
            } else {
                $content = in_array(strtolower($content), ['yes', 'true']);
            }
        }
    }
}
