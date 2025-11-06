import React, { useState } from "react";

function QuoteGenerator() {
  const [quote, setQuote] = useState("");

  const getQuote = () => {
    console.log("getQuote clicked");
    // Mock API response
    const response = {
      data: { quote: { text: "Keep pushing forward.", author: "Unknown" } }
    };
    setQuote(response.data.quote);
  };

  return (
    <div>
      <h2>Motivational Quote</h2>
      <button onClick={getQuote}>New Quote</button>

      {quote && (
        <p style={{ marginTop: "10px" }}>
          “{quote.text}” — <i>{quote.author}</i>
        </p>
      )}
    </div>
  );
}

export default QuoteGenerator;
