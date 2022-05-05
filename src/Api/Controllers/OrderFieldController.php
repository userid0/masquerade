<?php

namespace FoF\Game\Api\Controllers;

use Flarum\Api\Controller\AbstractListController;
use Flarum\Http\RequestUtil;
use FoF\Game\Api\Serializers\FieldSerializer;
use FoF\Game\Repositories\FieldRepository;
use FoF\Game\Validators\OrderFieldValidator;
use Illuminate\Support\Arr;
use Psr\Http\Message\ServerRequestInterface;
use Tobscure\JsonApi\Document;

class OrderFieldController extends AbstractListController
{
    public $serializer = FieldSerializer::class;

    protected $validator;
    protected $fields;

    public function __construct(OrderFieldValidator $validator, FieldRepository $fields)
    {
        $this->validator = $validator;
        $this->fields = $fields;
    }

    protected function data(ServerRequestInterface $request, Document $document)
    {
        RequestUtil::getActor($request)->assertAdmin();

        $attributes = $request->getParsedBody();

        $this->validator->assertValid($attributes);

        $order = Arr::get($attributes, 'sort');

        $this->fields->sorting($order);

        return $this->fields->all();
    }
}
