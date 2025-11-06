import React, { useState, useEffect } from "react";
import axios from "axios";

export default function WeatherModule() {
  const [city, setCity] = useState("London");
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const fetchWeather = async () => {
    console.log("fetchWeather clicked for city:", city); 
    setLoading(true);
    setError("");
    try {
      const res = await axios.get(`http://localhost:3001/api/weather?city=${city}`);
      console.log("Weather API Response:", res.data);
      setData(res.data);
    } catch {
      setError("Error fetching weather data.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchWeather();
  }, []);

  return (
    <div>
      <h2>Weather Info</h2>
      <p style={{ fontSize: 12, color: "#666" }}>
        Note: Mock weather data shown (no API key)
      </p>
      <input
        value={city}
        onChange={(e) => setCity(e.target.value)}
        placeholder="Enter city"
      />
      <button onClick={fetchWeather}>Get Weather</button>

      {loading && <p>Loading...</p>}
      {error && <p style={{ color: "red" }}>{error}</p>}
      {data && (
        <div>
          <p><strong>Location:</strong> {data.location}</p>
          <p><strong>Temperature:</strong> {data.temperatureC} °C</p>
          <p><strong>Condition:</strong> {data.description}</p>
        </div>
      )}
    </div>
  );
}
