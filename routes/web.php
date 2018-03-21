<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

// WELCOME PAGE
Route::get('/', function () {
    return redirect()->route('login');
});


// AUTH
Auth::routes();

Route::get('/home', 'HomeController@index');

Route::get('login/{provider}', 'Auth\SocialAuthController@redirectToProvider');
Route::get('login/{provider}/callback', 'Auth\SocialAuthController@handleProviderCallback');


// OTHERS
Route::get('/microtime', function () {
    event(
        new \App\Events\TestEvent()
    );
});

// APP Functionality
Route::get('/anonymous-chat', 'ChatController@index'); // Simple anonymous chat with websocket and Redis.