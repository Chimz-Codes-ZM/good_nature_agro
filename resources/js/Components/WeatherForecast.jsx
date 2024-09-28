import React from "react";
import TemperatureChart from "./TemperatureComponent";

const ForecastComponent = ({ data }) => {
  if (!data || !data.data || !Array.isArray(data.data) || data.data.length === 0) {
    return <div>No weather data available</div>;
  }

  return (
    <div className="bg-white p-6 rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold mb-4">16-Day Weather Forecast</h2>
      
      <div className="mb-8">
        <h3 className="text-xl font-semibold mb-2">Temperature Forecast</h3>
        <TemperatureChart data={data.data} />
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {data.data.map((day, index) => (
          <div key={index} className="bg-gray-100 p-4 rounded-md">
            <h3 className="font-semibold text-lg mb-2">{day.datetime}</h3>
            <p className="text-sm">
              <span className="font-medium">Temp:</span> {day.temp.toFixed(1)}°C
            </p>
            <p className="text-sm">
              <span className="font-medium">High:</span> {day.max_temp.toFixed(1)}°C
            </p>
            <p className="text-sm">
              <span className="font-medium">Low:</span> {day.min_temp.toFixed(1)}°C
            </p>
            <p className="text-sm">
              <span className="font-medium">Weather:</span> {day.weather.description}
            </p>
            <p className="text-sm">
              <span className="font-medium">Precipitation:</span> {day.precip.toFixed(1)} mm
            </p>
            <p className="text-sm">
              <span className="font-medium">Wind:</span> {day.wind_cdir_full} at {day.wind_spd.toFixed(1)} m/s
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ForecastComponent;