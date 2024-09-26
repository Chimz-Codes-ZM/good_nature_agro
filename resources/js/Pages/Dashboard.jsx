import React, { useState, useEffect } from "react";
import axios from "axios";
import SearchHistory from "@/Components/SearchHistory";
import WeatherForecast from "@/Components/WeatherForecast";
import CurrentWeather from "@/Components/CurrentWeather";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";

export default function Dashboard() {
    const [city, setCity] = useState("");
    const [countryCode, setCountryCode] = useState("");
    const [currentWeather, setCurrentWeather] = useState(null);
    const [forecast, setForecast] = useState(null);
    const [searchHistory, setSearchHistory] = useState([]);

    const fetchWeather = async () => {
        try {
            const currentResponse = await axios.get("/api/current-weather", {
                params: { city, country_code: countryCode },
            });
            setCurrentWeather(currentResponse.data);

            const forecastResponse = await axios.get("/api/forecast", {
                params: { city, country_code: countryCode },
            });
            setForecast(forecastResponse.data);

            fetchSearchHistory();
        } catch (error) {
            console.error("Error fetching the data: ", error);
        }
    };

    const fetchSearchHistory = async () => {
        try {
            const response = await axios.get("/api/search-history");
            setSearchHistory(response.data);
        } catch (error) {
            console.error("Error fetching the search history data: ", error);
        }
    };

    useEffect(() => {
        fetchSearchHistory();
    }, []);

    const handleSubmit = (e) => {
        e.preventDefault();
        fetchWeather();
    };

    const handleHistorySelect = (item) => {
        setCity(item.city);
        setCountryCode(item.country_code);
        fetchWeather();
    };
    return (
        <AuthenticatedLayout>
            <div className="container mx-auto p-4">
            <h1 className="text-3xl font-bold mb-6 text-white">Weather Dashboard</h1>
            <form onSubmit={handleSubmit} className="mb-6">
                <input
                    type="text"
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                    placeholder="Enter city"
                    className="border p-2 mr-2"
                    required
                />
                <input
                    type="text"
                    value={countryCode}
                    onChange={(e) => setCountryCode(e.target.value)}
                    placeholder="Country code (e.g., US)"
                    className="border p-2 mr-2"
                    required
                />
                <button type="submit" className="bg-blue-500 text-white p-2 rounded">
                    Get Weather
                </button>
            </form>
            <CurrentWeather data={currentWeather} />
            <WeatherForecast data={forecast} />
            <SearchHistory history={searchHistory} onSelect={handleHistorySelect} />
        </div>
        </AuthenticatedLayout>
    );
}
