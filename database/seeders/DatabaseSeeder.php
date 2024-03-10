<?php

namespace Database\Seeders;

use App\Models\Language;
use App\Models\User;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        User::firstOrCreate(
            [
                'name' => 'Admin',
                'email' => 'kotlowskifilip@gmail.com'
            ],
            [
                'password' => Hash::make('cqn7GYQ.qdc3zed-hkw'),
            ]
        );

        Language::firstOrCreate(
            [
                'value' => 'gb-GB',
            ],
            [
                'photoUrl' => '',
                'active' => 1,
            ]
        );
        Language::firstOrCreate(
            [
                'value' => 'pl-PL',
            ],
            [
                'photoUrl' => '',
                'active' => 0,
            ]
        );
    }
}
