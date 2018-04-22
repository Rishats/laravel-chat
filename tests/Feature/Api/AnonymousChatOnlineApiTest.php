<?php

namespace Tests\Feature;

use Tests\TestCase;
use Illuminate\Foundation\Testing\WithFaker;
use Illuminate\Foundation\Testing\RefreshDatabase;

class AnonymousChatOnlineApiTest extends TestCase
{
    /**
     * A basic test example.
     *
     * @return void
     */
    public function testAnonymousChatOnlineApi()
    {
        $response = $this->json('GET', '/api/anonymous_chat_online/');
        $structure = ['online'];
        $response
            ->assertStatus(200)
            ->assertJsonStructure($structure);
    }
}
