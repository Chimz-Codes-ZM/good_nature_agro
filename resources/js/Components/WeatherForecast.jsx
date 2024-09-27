import React from "react";

const CurrentWeather = ({ data }) => {
    if (!data || !data.data || !Array.isArray(data.data) || data.data.length === 0) {
        return <div>No weather data available</div>;
    }

    const weather = data.data[0];

    return (
        <div className="bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold mb-4">Current Weather in {weather.city_name}</h2>
            <div className="grid grid-cols-2 gap-4">
                <div>
                    <p className="font-semibold">Temperature: {weather.temp}°C</p>
                    <p>Feels like: {weather.app_temp}°C</p>
                    <p>Humidity: {weather.rh}%</p>
                    <p>Wind: {weather.wind_cdir_full} at {weather.wind_spd.toFixed(1)} m/s</p>
                    <p>Precipitation: {weather.precip} mm</p>
                </div>
                <div>
                    <p>Pressure: {weather.pres} mb</p>
                    <p>Visibility: {weather.vis} km</p>
                    <p>UV Index: {weather.uv}</p>
                    <p>Clouds: {weather.clouds}%</p>
                    <p>Weather: {weather.weather.description}</p>
                </div>
            </div>
            <div className="mt-4">
                <p>Observation Time: {weather.ob_time}</p>
                <p>Sunrise: {weather.sunrise}</p>
                <p>Sunset: {weather.sunset}</p>
            </div>
        </div>
    );
};

export default CurrentWeather;