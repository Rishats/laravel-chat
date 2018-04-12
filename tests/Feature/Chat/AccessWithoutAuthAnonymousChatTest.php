<?php

namespace Tests\Feature;

use Tests\TestCase;
use Illuminate\Foundation\Testing\WithFaker;
use Illuminate\Foundation\Testing\RefreshDatabase;

class AccessWithoutAuthAnonymousChatTest extends TestCase
{
    /**
     * Can user open /anonymous-chat without auth?.
     *
     * @return 302 code if user can not open page without auth.
     */
    public function testAccessWithoutAuth()
    {
        $response = $this->get('/anonymous-chat');

        $response->assertStatus(302);
    }

}
