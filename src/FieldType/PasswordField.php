<?php

namespace FoF\Game\FieldType;

class PasswordField extends BaseField
{
    public function overrideAttributes(): array
    {
        return [
            'validation' => 'min:6',
        ];
    }
}
