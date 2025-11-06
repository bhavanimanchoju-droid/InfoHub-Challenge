require('dotenv').config();
const express = require('express');
const cors = require('cors');
const axios = require('axios');

const app = express();
app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 3001;

// Mock quotes
const quotes = [
  { text: "Keep pushing forward.", author: "Unknown" },
  { text: "Dream big. Start small. Act now.", author: "Robin Sharma" },
  { text: "Consistency beats intensity.", author: "James Clear" },
  { text: "Do something today your future self will thank you for.", author: "Unknown" }
];

// Quotes API
app.get('/api/quote', (req, res) => {
  try {
    const idx = Math.floor(Math.random() * quotes.length);
    res.json({ quote: quotes[idx] });
  } catch {
    res.status(500).json({ error: 'Could not get quote.' });
  }
});

// Weather API
app.get('/api/weather', async (req, res) => {
  try {
    const city = req.query.city || 'London';
    const key = process.env.OPENWEATHER_KEY;

    if (!key) {
      return res.json({
        location: city,
        temperatureC: 26,
        description: 'Partly Cloudy (Mock)'
      });
    }

    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${key}`;
    const response = await axios.get(url);
    const temp = response.data.main.temp;
    const desc = response.data.weather[0].description;
    res.json({ location: response.data.name, temperatureC: temp, description: desc });
  } catch {
    res.status(500).json({ error: 'Could not fetch weather data.' });
  }
});

// Currency API
// Currency API (Free, No Key Needed)
app.get('/api/currency', async (req, res) => {
  try {
    const amount = Number(req.query.amount) || 1;

    // Free endpoint from open.er-api.com (no key required)
    const response = await axios.get('https://open.er-api.com/v6/latest/INR');

    const rates = response.data.rates;
    const usd = +(amount * rates.USD).toFixed(3);
    const eur = +(amount * rates.EUR).toFixed(3);

    res.json({
      amountINR: amount,
      usd,
      eur
    });
  } catch (error) {
    console.error("Currency API Error:", error.message);
    res.status(500).json({ error: 'Could not fetch currency data.' });
  }
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
