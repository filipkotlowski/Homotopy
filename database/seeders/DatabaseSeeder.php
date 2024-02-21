<?php

namespace Database\Seeders;

// use Illuminate\Database\Console\Seeds\WithoutModelEvents;

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
                'email' => 'kotlowskifilip@gmail.com    '
            ],
            [
                'password' => Hash::make('cqn7GYQ.qdc3zed-hkw'),
            ]
        );
    }
}
