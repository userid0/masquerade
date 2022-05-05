<?php

namespace FoF\Game\Validators;

use FoF\Game\FieldType\TypeFactory;
use Flarum\Foundation\AbstractValidator;

class FieldValidator extends AbstractValidator
{
    protected function getRules(): array
    {
        return [
            'name' => ['required', 'string'],
            'description' => ['string'],
            'required' => ['boolean'],
            'type' => ['nullable', 'in:' . implode(',', TypeFactory::validTypes())],
            'validation' => ['nullable', 'string'],
            'icon' => ['string'],
            'prefix' => ['nullable', 'string'],
            'on_bio' => ['boolean']
        ];
    }
}
