<?php

namespace FoF\Game\Validators;

use Flarum\Foundation\AbstractValidator;

class OrderFieldValidator extends AbstractValidator
{
    protected function getRules(): array
    {
        return [
            'sort' => ['required', 'array'],
        ];
    }
}
