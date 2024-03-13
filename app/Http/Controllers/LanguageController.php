<?php

namespace App\Http\Controllers;

use App\Models\Language;
use Illuminate\Http\Request;

class LanguageController extends Controller
{
    public function all(){
        return Language::all();
    }

    public function update(Request $request)
    {
        // reset active of languages
        $languages = Language::all();
        foreach ($languages as $language) {
            $language->update(['active' => false]);
        }

        // set language as active
        $language = Language::where('value', $request->value)->first();
        if (!$language) {
            return response()->json(['message' => 'Language not found'], 404);
        }

        $language->update(['active' => true]);
        return response()->json($language);
    }
}
