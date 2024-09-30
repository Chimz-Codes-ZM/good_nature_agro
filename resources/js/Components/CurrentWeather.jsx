import React from "react";

const CurrentWeather = ({ data }) => {
    if (!data || !data.data || data.data.length === 0) return null;

    const weatherData = data.data[0];

    return (
        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-gray-100">
                Current Weather in {weatherData.city_name}, {weatherData.country_code}
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-gray-800 dark:text-gray-300">
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
