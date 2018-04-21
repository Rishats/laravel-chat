<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
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

        return response()->json([
            'online' => $current_online
        ]);
    }
}
