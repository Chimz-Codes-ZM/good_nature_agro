<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\SearchHistory;
use Illuminate\Support\Facades\Auth;

class SearchHistoryController extends Controller
{
    public function index()
    {
        $history = SearchHistory::where('user_id', Auth::id())
        ->orderBy('created_at', 'desc')
        ->take(5)
        ->get();
        
        return response()->json($history);
    }
}
