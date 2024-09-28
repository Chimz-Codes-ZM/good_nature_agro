import React, { useState } from "react";
import TemperatureChart from "./TemperatureComponent";

const ForecastComponent = ({ data }) => {
    const [currentPage, setCurrentPage] = useState(0);
    const daysPerPage = 5;

  if (!data || !data.data || !Array.isArray(data.data) || data.data.length === 0) {
    return <div>No weather data available</div>;
  }

  const totalPages = Math.ceil(data.data.length / daysPerPage);
  const paginatedData = data.data.slice(
    currentPage * daysPerPage,
    (currentPage + 1) * daysPerPage
  );

  const nextPage = () => setCurrentPage((prev) => Math.min(prev + 1, totalPages - 1));
  const prevPage = () => setCurrentPage((prev) => Math.max(prev - 1, 0));

  return (
    <div className="bg-white p-6 rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold mb-4">16-Day Weather Forecast</h2>
      
      <div className="mb-8">
        <h3 className="text-xl font-semibold mb-2">Temperature Forecast</h3>
        <TemperatureChart data={data.data} />
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4 mb-4">
        {paginatedData.map((day, index) => (
          <div key={index} className="bg-gray-100 p-4 rounded-md shadow hover:shadow-md transition-shadow duration-300">
            <h3 className="font-semibold text-lg mb-2 text-blue-600">{day.datetime}</h3>
            <div className="space-y-2">
              <p className="text-sm flex justify-between">
                <span className="font-medium">Temp:</span>
                <span>{day.temp.toFixed(1)}°C</span>
              </p>
              <p className="text-sm flex justify-between">
                <span className="font-medium">High:</span>
                <span className="text-red-500">{day.max_temp.toFixed(1)}°C</span>
              </p>
              <p className="text-sm flex justify-between">
                <span className="font-medium">Low:</span>
                <span className="text-blue-500">{day.min_temp.toFixed(1)}°C</span>
              </p>
              <p className="text-sm">
                <span className="font-medium">Weather:</span> {day.weather.description}
              </p>
              <p className="text-sm flex justify-between">
                <span className="font-medium">Precipitation:</span>
                <span>{day.precip.toFixed(1)} mm</span>
              </p>
              <p className="text-sm">
                <span className="font-medium">Wind:</span> {day.wind_cdir_full} at {day.wind_spd.toFixed(1)} m/s
              </p>
            </div>
          </div>
        ))}
      </div>
      
      <div className="flex justify-between items-center">
        <button
          onClick={prevPage}
          disabled={currentPage === 0}
          className="flex items-center px-4 py-2 bg-blue-500 text-white rounded-md disabled:bg-gray-300"
        >
          Previous
        </button>
        <span>
          Page {currentPage + 1} of {totalPages}
        </span>
        <button
          onClick={nextPage}
          disabled={currentPage === totalPages - 1}
          className="flex items-center px-4 py-2 bg-blue-500 text-white rounded-md disabled:bg-gray-300"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default ForecastComponent;