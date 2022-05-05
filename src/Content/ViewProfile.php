<?php

namespace FoF\Game\Content;

use Flarum\Frontend\Document;
use Flarum\Http\RequestUtil;
use Flarum\User\UserRepository;
use Illuminate\Support\Arr;
use Psr\Http\Message\ServerRequestInterface;

class ViewProfile
{
    /**
     * @var UserRepository
     */
    protected $users;

    function __construct(UserRepository $users)
    {
        $this->users = $users;
    }

    public function __invoke(Document $document, ServerRequestInterface $request)
    {
        $actor = RequestUtil::getActor($request);

        $slug = Arr::get($request->getQueryParams(), 'username');
        $user = $this->users->findOrFailByUsername($slug);

        if ($user->id !== $actor->id) {
            $actor->assertCan('fof.game.edit-others-profile');
        }

        $actor->assertCan('fof.game.view-profile');
    }
}
