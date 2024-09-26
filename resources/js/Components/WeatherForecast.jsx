import React from "react";

const WeatherForecast = ({ data }) => {
    if (!data) return null;

    return (
        <div>
            <h2>16-Day Forecast</h2>
            <div>
                {data.map((day, index) => (
                    <div key={index}>
                        <h3>{day.datetime}</h3>
                        <p>Max Temp: {day?.max_temp}°C</p>
                        <p>Min Temp: {day?.min_temp}°C</p>
                        <p>Weather: {day?.weather.description}</p>
                        <p>Precipitation: {day?.precip} mm</p>
                        <p>UV Index: {day.uv}</p>
                        <p>Wind: {day?.wind_cdir_full} at {day?.wind_spd} m/s</p>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default WeatherForecast;