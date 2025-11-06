import React, { useState, useEffect } from "react";
import axios from "axios";

export default function CurrencyConverter() {
  const [amount, setAmount] = useState(100);
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const fetchConversion = async () => {
    setLoading(true);
    setError("");
    try {
      const res= await axios.get(`http://localhost:3001/api/currency?amount=${amount}`);
      setResult(res.data);
    } catch {
      setError("Error fetching currency data.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchConversion();
  }, []);

  return (
    <div>
      <h2>Currency Converter</h2>
      <input
        type="number"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
      />
      <button onClick={fetchConversion}>Convert</button>

      {loading && <p>Loading...</p>}
      {error && <p style={{ color: "red" }}>{error}</p>}

      {result && (
        <div>
          <p><strong>INR:</strong> {result.amountINR}</p>
          <p><strong>USD:</strong> {result.usd}</p>
          <p><strong>EUR:</strong> {result.eur}</p>
        </div>
      )}
    </div>
  );
}
