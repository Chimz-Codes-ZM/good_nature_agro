<?php

namespace App\Services;

use Illuminate\Support\Facades\Http;

class WeatherService
{
    private $apiKey;
    private $baseUrl;

    public function __construct()
    {
        $this->apiKey = config('weatherbit.api_key');
        $this->baseUrl = config('weatherbit.base_url');
    }

    public function getCurrentWeather($city, $countryCode)
    {
        $response = Http::get("{$this->baseUrl}/current", [
            'key' => $this->apiKey,
            'city' => $city,
            'country' => $countryCode,
        ]);

        return $response->json();
    }

    public function getForecast($city, $countryCode)
    {
        $response = Http::get("{$this->baseUrl}/forecast/daily", [
            'key' => $this->apiKey,
            'city' => $city,
            'country' => $countryCode,
            'days' => 16,
        ]);

        return $response->json();
    }
}