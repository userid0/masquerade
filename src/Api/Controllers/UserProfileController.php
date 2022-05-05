<?php

namespace FoF\Game\Api\Controllers;

use Flarum\Http\RequestUtil;
use FoF\Game\Api\Serializers\FieldSerializer;
use FoF\Game\Field;
use FoF\Game\Repositories\FieldRepository;
use FoF\Game\Validators\AnswerValidator;
use Flarum\Api\Controller\AbstractListController;
use Illuminate\Database\Eloquent\ModelNotFoundException;
use Illuminate\Support\Arr;
use Psr\Http\Message\ServerRequestInterface;
use Tobscure\JsonApi\Document;

class UserProfileController extends AbstractListController
{
    public $serializer = FieldSerializer::class;

    public $include = ['answer'];
    /**
     * @var AnswerValidator
     */
    protected $validator;
    /**
     * @var \Illuminate\Database\Eloquent\Collection
     */
    protected $fields;

    function __construct(AnswerValidator $validator, FieldRepository $fields)
    {
        $this->validator = $validator;
        $this->fields = $fields->all();
    }

    protected function data(ServerRequestInterface $request, Document $document)
    {
        $actor = RequestUtil::getActor($request);

        $actor->assertCan('fof.game.view-profile');

        $id = Arr::get($request->getQueryParams(), 'id');

        if (!$id) {
            throw new ModelNotFoundException();
        }

        return $this->fields->each(function (Field $field) use ($id) {
            $field->for = $id;
        });
    }
}
