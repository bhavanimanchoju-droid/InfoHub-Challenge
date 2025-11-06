import React, { useState, useEffect } from "react";
import axios from "axios";

export default function QuoteGenerator() {
  const [quote, setQuote] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const fetchQuote = async () => {
    setLoading(true);
    setError("");
    try {
      const res = await axios.get(`http://localhost:3001/api/quote`);
      setQuote(res.data.quote);
    } catch {
      setError("Error fetching quote.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchQuote();
  }, []);

  return (
    <div>
      <h2>Motivational Quote</h2>
      <button onClick={fetchQuote}>New Quote</button>
      {loading && <p>Loading...</p>}
      {error && <p style={{ color: "red" }}>{error}</p>}
      {quote && (
        <blockquote>
          "{quote.text}" - {quote.author}
        </blockquote>
      )}
    </div>
  );
}
