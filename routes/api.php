<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\WeatherController;
use App\Http\Controllers\SearchHistoryController;

Route::get('/user', function (Request $request) {
    return $request->user();
})->middleware('auth:sanctum');

Route::middleware('auth:sanctum')->group(function() {
    Route::get('/current-weather', [WeatherController::class, 'getCurrentWeather']);
    Route::get('/forecast', [WeatherController::class, 'getForecast']);
    Route::get('/search-history', [SearchHistoryController::class, 'index']);
});
