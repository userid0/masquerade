<?php

use Illuminate\Database\Schema\Builder;

return [
    'up' => function (Builder $schema) {
        // Re-use the tables from the Flagrow version if they exist
        if ($schema->hasTable('flagrow_game_fields') && !$schema->hasTable('fof_game_fields')) {
            $schema->rename('flagrow_game_fields', 'fof_game_fields');
        }
        if ($schema->hasTable('flagrow_game_answers') && !$schema->hasTable('fof_game_answers')) {
            $schema->rename('flagrow_game_answers', 'fof_game_answers');
        }
    },
    'down' => function (Builder $schema) {
        // Not doing anything but `down` has to be defined
    },
];
