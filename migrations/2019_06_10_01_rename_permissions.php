<?php

use Flarum\Group\Permission;
use Illuminate\Database\Schema\Builder;

return [
    'up' => function (Builder $schema) {
        Permission::query()
            ->where('permission', 'flagrow.game.view-profile')
            ->update(['permission' => 'fof.game.view-profile']);
        Permission::query()
            ->where('permission', 'flagrow.game.have-profile')
            ->update(['permission' => 'fof.game.have-profile']);
    },
    'down' => function (Builder $schema) {
        // Not doing anything but `down` has to be defined
    },
];
