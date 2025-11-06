import React, { useState } from "react";

function CurrencyConverter() {
  const [amount, setAmount] = useState(100);
  const [result, setResult] = useState(null);

  const convertCurrency = () => {
    console.log("convertCurrency clicked for amount:", amount);
    // Mock API response
    const response = {
      data: { amountINR: amount, usd: 1.12, eur: 0.98 }
    };
    setResult(response.data);
  };

  return (
    <div>
      <h2>Currency Converter</h2>
      <input
        type="number"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
      />
      <button onClick={convertCurrency}>Convert</button>

      {result && (
        <div style={{ marginTop: "10px" }}>
          <p><b>INR:</b> {result.amountINR}</p>
          <p><b>USD:</b> {result.usd}</p>
          <p><b>EUR:</b> {result.eur}</p>
        </div>
      )}
    </div>
  );
}

export default CurrencyConverter;
