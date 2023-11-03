const express = require("express");
const cors = require("cors");
require("dotenv").config();
const app = express();
app.use(cors());
const PORT = process.env.PORT || 8080;
const axios = require("axios");

app.get("/", (_, response) => {
  response.json("You are looking at root route");

  app.listen(PORT, () => console.log(`App is running on port ${PORT}`));
});
