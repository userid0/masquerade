<?php

namespace FoF\Game\FieldType;

class UrlField extends BaseField
{
    public function overrideAttributes(): array
    {
        return [
            'validation' => 'url',
        ];
    }
}
