<?php

namespace FoF\Game;

use Flarum\Api\Serializer\ForumSerializer;
use Flarum\Settings\SettingsRepositoryInterface;
use FoF\Game\Repositories\FieldRepository;

class ForumAttributes
{
    protected $settings;
    protected $fields;

    public function __construct(SettingsRepositoryInterface $settings, FieldRepository $fields)
    {
        $this->settings = $settings;
        $this->fields = $fields;
    }

    public function __invoke(ForumSerializer $serializer): array
    {
        $actor = $serializer->getActor();

        return [
            'game.force-profile-completion' => (bool)$this->settings->get('game.force-profile-completion', false),
            'game.profile-completed' => $actor->isGuest() ? false : $this->fields->completed($actor->id),
            'canViewGame' => $actor->can('fof.game.view-profile'),
        ];
    }
}
