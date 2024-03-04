<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class AuthenticateAdmin
{
    public function handle(Request $request, Closure $next)
    {
        if (!$request->is('login') && ($request->is('admin/*')  ||  $request->is('admin')) && !Auth::check()) {
            return redirect('/login');
        }

        return $next($request);
    }
}
