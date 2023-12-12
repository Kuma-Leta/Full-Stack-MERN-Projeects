//  require("dotenv").config();
// const mongoose = require("mongoose");
// const express = require("express");
// const app = express();
// const Db = process.env.DATABASE;
// mongoose.connect(Db);
// const connection = mongoose.connection;
// connection.once("open", () => {
//   console.log("Database connected successfully");
// });

// const PORT = 8000; // Specify the port
// const HOST = "127.0.0.1"; // Specify the host (optional)
// app.listen(PORT, HOST, () => {
//   console.log(`The server is running on http://${HOST}:${PORT}`);
// });
const apiKey = "74e4bb9243da1f8df01ab138d56c9fbe";
const city = "London";

fetch(
  `http://api.openweathermap.org/data/2.5/weather?q=${city},uk&APPID=${apiKey}`
)
  .then((response) => {
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    return response.json();
  })
 
  .catch((error) => console.error("Error fetching weather data:", error));
