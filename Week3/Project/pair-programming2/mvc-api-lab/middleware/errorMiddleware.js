const express = require("express");
const app = express();

// Error handling middleware
const errorMiddleware = (error, request, response, next) => {
  console.error(error.message);
  res.status(500).send("Something broke!");
};

module.exports = errorMiddleware;
