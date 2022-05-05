<?php

namespace FoF\Game\FieldType;

class BooleanField extends BaseField
{
    public function overrideAttributes(): array
    {
        return [
            'validation' => 'boolean',
        ];
    }
}
