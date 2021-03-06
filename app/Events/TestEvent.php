<?php

namespace App\Events;

use App\Events\Event;
use Illuminate\Queue\SerializesModels;
use Illuminate\Contracts\Broadcasting\ShouldBroadcast;

class TestEvent implements ShouldBroadcast
{
    use SerializesModels;

    public $time;

    public function __construct()
    {
        //$this->time = microtime();
    }

    /**
     * Get the channels the event should broadcast on.
     *
     * @return \Illuminate\Broadcasting\Channel|array
     */
    public function broadcastOn()
    {
        return ['service'];
    }

    public function broadcastWith()
    {
        return [
            'time' => microtime(),
            'version' => 0.1
        ];
    }

    public function broadcastAs()
    {
        return 'microtime';
    }
}
