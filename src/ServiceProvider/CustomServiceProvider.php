<?php

namespace FoF\Game\ServiceProvider;

use Flarum\Foundation\AbstractServiceProvider;
use Illuminate\Contracts\Container\Container;
use Illuminate\Database\Capsule\Manager;
use Illuminate\Database\ConnectionInterface;
use Illuminate\Database\ConnectionResolverInterface;

class CustomServiceProvider extends AbstractServiceProvider
{
/**
 * {@inheritdoc}
 */
    public function register()
    {
        $this->app->extend(Manager::class, function (Manager $manager, Container $container) {
            
            $config                   = $container['flarum']->config('database2');
            $config['engine']         = 'InnoDB';
            $config['prefix_indexes'] = true;

            $manager->addConnection($config, 'database2');
            return $manager;
        });
    }
}
