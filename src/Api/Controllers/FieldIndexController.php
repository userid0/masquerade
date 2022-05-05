<?php

namespace FoF\Game\Api\Controllers;

use Flarum\Http\RequestUtil;
use FoF\Game\Api\Serializers\FieldSerializer;
use FoF\Game\Repositories\FieldRepository;
use Flarum\Api\Controller\AbstractListController;
use Psr\Http\Message\ServerRequestInterface;
use Tobscure\JsonApi\Document;

class FieldIndexController extends AbstractListController
{
    public $serializer = FieldSerializer::class;

    protected $fields;

    public function __construct(FieldRepository $fields)
    {
        $this->fields = $fields;
    }

    protected function data(ServerRequestInterface $request, Document $document)
    {
        RequestUtil::getActor($request)->assertAdmin();

        return $this->fields->all();
    }
}
