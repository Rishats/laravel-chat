<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\Redis;

class AnonymousChatApiController extends Controller
{
    /**
     * Show chat online.
     *
     * @return \Illuminate\Http\Response
     */
    public function showOnline()
    {
        $current_online = Redis::get('anonymous_chat_online');

        if($current_online == null){
            $current_online = 0;
            Log::info('Need create anonymous_chat_online key with value in Redis. Just open anonymous chat.');
        }

        return response()->json([
            'online' => $current_online
        ]);
    }
}
