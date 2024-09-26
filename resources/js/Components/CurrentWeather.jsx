import React from "react";

const CurrentWeather = ({ data }) => {
    if (!data) return null;

    return (
        <div>
            <h2>Current Weatherr in {data.city_name}, {data.country_code}</h2>
            <p>Temperature: {data.temp}°C</p>
            <p>Feels like: {data.app_temp}°C</p>
            <p>Weather: {data.weather.description}</p>
            <p>Wind Speed: {data.wind_spd} m/s</p>
            <p>Humidity: {data.rh}%</p>
            <p>Air Quality Index: {data.aqi}</p>
            <p>Observation Time: {data.ob_time}</p>
        </div>
    );
};

export default CurrentWeather;
