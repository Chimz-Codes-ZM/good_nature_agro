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
            const response = await axios.get("/api/forecast")
        } catch (error) {

        }
    }; 
    return (
        <AuthenticatedLayout>
            <div className="text-white">
                <ForecastComponent />
            </div>
        </AuthenticatedLayout>
    );
};

export default WeatherForecast;
