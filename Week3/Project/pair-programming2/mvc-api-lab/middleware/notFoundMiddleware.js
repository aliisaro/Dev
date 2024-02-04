const express = require("express");
const app = express();

// An endpoint that throws a 404 error
const notFoundMiddleware = (request, response) => {
  response.status(404).send({ error: "unknown endpoint" });
};

module.exports = notFoundMiddleware;
