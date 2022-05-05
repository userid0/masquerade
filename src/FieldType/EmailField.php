<?php

namespace FoF\Game\FieldType;

class EmailField extends BaseField
{
    public function overrideAttributes(): array
    {
        return [
            'validation' => 'email',
        ];
    }
}
