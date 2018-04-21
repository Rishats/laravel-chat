<?php

namespace App\Http\Controllers;

use App\AnonymousChatMessage;
use Illuminate\Http\Request;

class AnonymousChatController extends Controller
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
        $last_messages = AnonymousChatMessage::orderBy('id', 'desc')
            ->take(5)
            ->get()
            ->reverse();

        return view('anonymous_chat')->with( ['last_messages' => $last_messages]);
    }
}
