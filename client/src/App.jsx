import React, { useState } from "react";
import WeatherModule from "./WeatherModule";
import CurrencyConverter from "./CurrencyConverter";
import QuoteGenerator from "./QuoteGenerator";
import "./App.css";

export default function App() {
  const [activeTab, setActiveTab] = useState("Weather");

  return (
    <div className="app-container">
      <h1>InfoHub</h1>

      <div className="tab-buttons">
        <button
          className={activeTab === "Weather" ? "active" : ""}
          onClick={() => setActiveTab("Weather")}
        >
          Weather
        </button>
        <button
          className={activeTab === "Currency" ? "active" : ""}
          onClick={() => setActiveTab("Currency")}
        >
          Currency
        </button>
        <button
          className={activeTab === "Quote" ? "active" : ""}
          onClick={() => setActiveTab("Quote")}
        >
          Quote
        </button>
      </div>

      {activeTab === "Weather" && <WeatherModule />}
      {activeTab === "Currency" && <CurrencyConverter />}
      {activeTab === "Quote" && <QuoteGenerator />}
    </div>
  );
}
