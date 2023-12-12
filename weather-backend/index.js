const express = require("express");
const cors = require("cors");
const axios = require("axios");
require('dotenv').config();
const app = express();
const port = process.env.PORT || 8000;

// Apply CORS middleware
app.use(cors());
app.use(express.json());

app.get("/weather/:location", async (req, res) => {
  try {
    const { location } = req.params;
    const API_KEY = "74e4bb9243da1f8df01ab138d56c9fbe";
    const API_URL = `http://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${API_KEY}`;
    const response = await axios.get(API_URL);
    res.json(response.data);
  } catch (error) {
    console.error("Error with fetching data", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

app.listen(port, () => {
  console.log(`The server is running on ${port}`);
});
