<?php

namespace App\Http\Controllers;
use App\ChatMessage;

class ChatController extends Controller
{
    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct()
    {
        $this->middleware('auth');
    }

    /**
     * Show the application dashboard.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $last_messages = ChatMessage::orderBy('id', 'desc')
            ->take(5)
            ->get()
            ->reverse();

        return view('chat')->with( ['last_messages' => $last_messages]);
    }
}
