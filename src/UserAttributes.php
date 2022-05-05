<?php

namespace FoF\Game;

use Flarum\Api\Serializer\UserSerializer;
use Flarum\User\User;

class UserAttributes
{
    public function __invoke(UserSerializer $serializer, User $user, array $attributes): array
    {
        $actor = $serializer->getActor();

        if ($actor->id === $user->id) {
            // Own profile
            $attributes['canEditGameProfile'] = $actor->can('fof.game.have-profile');
        } else {
            // Other's profile
            $attributes['canEditGameProfile'] = $actor->can('fof.game.edit-others-profile');
        }

        return $attributes;
    }
}
