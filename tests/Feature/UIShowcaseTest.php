<?php

use Inertia\Testing\AssertableInertia as Assert;

test('ui showcase renders', function (): void {
    $this->get(route('ui-showcase'))
        ->assertOk()
        ->assertInertia(fn (Assert $page) => $page
            ->component('ui-showcase')
        );
});
