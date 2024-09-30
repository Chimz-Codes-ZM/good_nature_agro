import React, { useState, useEffect } from "react";
import axios from "axios";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import ForecastComponent from "@/Components/WeatherForecast";

const WeatherForecast = () => {
    const [city, setCity] = useState("");
    const [countryCode, setCountryCode] = useState("");
    const [currentForecast, setCurrentForecast] = useState("");
    const [error, setError] = useState("");

    const fetchForecast = async () => {
        if (!city || !countryCode) {
            setError("City and country code are required");
            return;
        }

        try {
            const response = await axios.get("/api/forecast", {
                params: { city: city, country_code: countryCode },
                withCredentials: true,
              });
            setCurrentForecast(response.data);
            setError(null);
        } catch (error) {
            console.error("Error fetching the data: ", error);
            setError("Failed to fetch weather forecast. Please try again.");
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        fetchForecast();
    };
    return (
        <AuthenticatedLayout>
            <div className="container mx-auto p-4">
            <h1 className="text-3xl font-bold mb-6 dark:text-white">Forecast Dashboard</h1>
                <form onSubmit={handleSubmit} className="mb-6">
                    <input
                        type="text"
                        value={city}
                        onChange={(e) => setCity(e.target.value)}
                        placeholder="Enter city"
                        className="border rounded-md p-2 mr-2"
                        required
                    />
                    <input
                        type="text"
                        value={countryCode}
                        onChange={(e) => setCountryCode(e.target.value)}
                        placeholder="Country code (e.g., ZM)"
                        className="border p-2 mr-2"
                        required
                    />
                    <button type="submit" className="bg-blue-500 text-white p-2 rounded">
                        Get Forecast
                    </button>
                </form>
                {error && <div className="text-red-500 mb-4">{error}</div>}
                {currentForecast && (
                    <ForecastComponent data={currentForecast} />
                )}
            </div>
        </AuthenticatedLayout>
    );
};

export default WeatherForecast;
