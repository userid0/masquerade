<?php

namespace FoF\Game\Api\Controllers;

use Flarum\Http\RequestUtil;
use FoF\Game\Api\Serializers\FieldSerializer;
use FoF\Game\Repositories\FieldRepository;
use FoF\Game\Validators\FieldValidator;
use Flarum\Api\Controller\AbstractShowController;
use Illuminate\Support\Arr;
use Psr\Http\Message\ServerRequestInterface;
use Tobscure\JsonApi\Document;

class DeleteFieldController extends AbstractShowController
{
    public $serializer = FieldSerializer::class;

    protected $validator;
    protected $fields;

    public function __construct(FieldValidator $validator, FieldRepository $fields)
    {
        $this->validator = $validator;
        $this->fields = $fields;
    }

    protected function data(ServerRequestInterface $request, Document $document)
    {
        RequestUtil::getActor($request)->assertAdmin();

        $id = Arr::get($request->getQueryParams(), 'id');

        if ($deleted = $this->fields->delete($id)) {
            return $deleted;
        }

        throw new \RuntimeException('Could not delete Field');
    }
}
