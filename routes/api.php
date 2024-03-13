<?php

use App\Http\Controllers\AuthenticationController;
use App\Http\Controllers\LanguageController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

Route::middleware('web')->group(function () {
    Route::get('/languages', [LanguageController::class, 'all']);
    Route::post('/authenticate', [AuthenticationController::class, 'authenticate']);
    Route::post('logout', [AuthenticationController::class, 'logout']);
});
