import React, { useState } from "react";

function WeatherModule() {
  const [city, setCity] = useState("London");
  const [weather, setWeather] = useState(null);

  const fetchWeather = () => {
    console.log("fetchWeather clicked for city:", city);
    // Mock API response
    const response = {
      data: {
        location: city,
        temperatureC: 26,
        description: "Partly Cloudy (Mock)"
      }
    };
    setWeather(response.data);
  };

  return (
    <div>
      <h2>Weather Info</h2>
      <p style={{ fontSize: 12, color: "#666" }}>
        Note: Mock weather data shown (no backend API)
      </p>
      <input value={city} onChange={(e) => setCity(e.target.value)} />
      <button onClick={fetchWeather}>Get Weather</button>

      {weather && (
        <div style={{ marginTop: "10px" }}>
          <p><b>Location:</b> {weather.location}</p>
          <p><b>Temperature:</b> {weather.temperatureC} °C</p>
          <p><b>Condition:</b> {weather.description}</p>
        </div>
      )}
    </div>
  );
}

export default WeatherModule;
