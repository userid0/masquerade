<?php

namespace FoF\Game\Api\Serializers;

use Flarum\Api\Serializer\AbstractSerializer;
use Tobscure\JsonApi\Relationship;

class AnswerSerializer extends AbstractSerializer
{
    /**
     * @param \FoF\Game\Answer $model
     */
    protected function getDefaultAttributes($model): array
    {
        return array_merge($model->toArray(), [
            'fieldId' => $model->field_id
        ]);
    }

    public function getType($model): string
    {
        return 'game-answer';
    }

    public function field($model): ?Relationship
    {
        return $this->hasOne(
            $model->field,
            FieldSerializer::class
        );
    }
}
