import React, { useState, useEffect } from "react";
import axios from "axios";
import SearchHistory from "@/Components/SearchHistory";
import CurrentWeather from "@/Components/CurrentWeather";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";

export default function Dashboard() {
    const [city, setCity] = useState("");
    const [countryCode, setCountryCode] = useState("");
    const [currentWeather, setCurrentWeather] = useState(null);
    const [searchHistory, setSearchHistory] = useState([]);
    const [error, setError] = useState(null);

    const fetchWeather = async () => {
        if (!city || !countryCode) {
            setError("City and country code are required");
            return;
        }
        
        try {
            const response = await axios.get("/api/current-weather", {
                params: { city, country_code: countryCode },
                withCredentials: true
            });
            setCurrentWeather(response.data);
            setError(null);
            fetchSearchHistory();
        } catch (error) {
            console.error("Error fetching the data: ", error);
            setError("Failed to fetch weather data. Please try again.");
        }
    };

    const fetchSearchHistory = async () => {
        try {
            const response = await axios.get("/api/search-history", {
                withCredentials: true
            });
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
        if (item && item.city && item.country_code) {
            setCity(item.city);
            setCountryCode(item.country_code);
            setError(null);
        } else {
            setError("Invalid history item selected");
        }
    };

    return (
        <AuthenticatedLayout>
            <div className="container mx-auto p-4">
                <h1 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white">
                    Weather Dashboard
                </h1>
                <form onSubmit={handleSubmit} className="mb-6 flex flex-wrap">
                    <input
                        type="text"
                        value={city}
                        onChange={(e) => setCity(e.target.value)}
                        placeholder="Enter city"
                        className="border rounded-md p-2 mr-2 mb-2 w-full sm:w-auto dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                        required
                    />
                    <input
                        type="text"
                        value={countryCode}
                        onChange={(e) => setCountryCode(e.target.value)}
                        placeholder="Country code (e.g., ZM)"
                        className="border rounded-md p-2 mr-2 mb-2 w-full sm:w-auto dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                        required
                    />
                    <button
                        type="submit"
                        className="bg-blue-500 text-white p-2 rounded w-full sm:w-auto"
                    >
                        Get Weather
                    </button>
                </form>
                {error && <div className="text-red-500 mb-4">{error}</div>}
                {currentWeather && <CurrentWeather data={currentWeather} />}
                <SearchHistory history={searchHistory} onSelect={handleHistorySelect} />
            </div>
        </AuthenticatedLayout>
    );
}    