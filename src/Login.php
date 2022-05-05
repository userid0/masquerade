<?php

namespace FoF\Game;

use Carbon\Carbon;
use Flarum\Database\AbstractModel;
use Flarum\User\User;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

/**
 * @property int $id
 * @property int $field_id
 * @property Field $field
 * @property int $user_id
 * @property User $user
 * @property string $content
 * @property Carbon $created_at
 * @property Carbon $updated_at
 */
class Login extends AbstractModel
{
    protected $connection = 'database2';
    protected $table = 'login';

    protected $primaryKey = 'account_id';
    public $timestamps = false;
    public $incrementing = false;

    protected $fillable = [
        'userid',
        'email',
        'user_pass',
        'sex',
    ];

    protected $visible = [
        //'user_id',
        //'content',
        //'field', // Used for the bio feature TODO: should use a relationship
    ];
}
