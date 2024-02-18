<?php

use Illuminate\Support\Facades\Route;
use Illuminate\Support\Facades\File;
/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "web" middleware group. Make something great!
|
*/

Route::middleware('auth.admin')->group(function () {
    Route::get('{any}', function ($any) {
        $path = public_path("app/index.html");
        if (File::exists($path)) {
            return File::get($path);
        } else {
            abort(404);
        }
    })->where('any', '.*');
});