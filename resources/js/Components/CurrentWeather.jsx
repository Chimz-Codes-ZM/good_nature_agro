import React from "react";

const CurrentWeather = ({ data }) => {
    if (!data || !data.data || data.data.length === 0) return null;

    const weatherData = data.data[0];

    return (
        <div className="bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold mb-4">Current Weather in {weatherData.city_name}, {weatherData.country_code}</h2>
            <div className="grid grid-cols-2 gap-4">
                <p>Temperature: {weatherData.temp}°C</p>
                <p>Feels like: {weatherData.app_temp}°C</p>
                <p>Weather: {weatherData.weather.description}</p>
                <p>Wind Speed: {weatherData.wind_spd.toFixed(1)} m/s</p>
                <p>Humidity: {weatherData.rh}%</p>
                <p>Air Quality Index: {weatherData.aqi}</p>
                <p>Observation Time: {weatherData.ob_time}</p>
            </div>
        </div>
    );
};

export default CurrentWeather;