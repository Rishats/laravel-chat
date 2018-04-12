<?php

namespace Tests\Feature;

use App\User;
use Tests\TestCase;

class AccessWithAuthAnonymousChatTest extends TestCase
{
    /**
     * Can user open /anonymous-chat with auth?.
     *
     * @return 200 code if user can open page with auth.
     */
    public function testAccessWithAuth()
    {
        $user = factory(User::class)->create();

        $response = $this->actingAs($user)
            ->get('/anonymous-chat');

        $response->assertStatus(200);
    }
}
