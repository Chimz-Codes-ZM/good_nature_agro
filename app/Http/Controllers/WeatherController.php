<?php

namespace App\Http\Controllers;

use App\Services\WeatherService;
use App\Models\SearchHistory;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class WeatherController extends Controller
{
    private $weatherService;

    public function __construct(WeatherService $weatherService)
    {
        $this->weatherService = $weatherService;
    }

    public function getCurrentWeather(Request $request)
    {
        $request->validate([
            'city' => 'required|string',
            'country_code' => 'required|string|size:2',
        ]);

        $weather = $this->weatherService->getCurrentWeather($request->city, $request->country_code);

        SearchHistory::create([
            'user_id' => Auth::id(),
            'city' => $request->city,
            'country_code' => $request->country_code
        ]);

        return response()->json($weather);
    }

    public function getForecast(Request $request) 
    {
        $request->validate([
            'city' => 'required|string',
            'country_code' => 'required|string|size:2'
        ]);

        $forecast = $this->weatherService->getForecast($request->city, $request->country_code);

        return response()->json($forecast);
    }
}