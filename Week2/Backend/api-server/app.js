const express = require("express");
const app = express();
const port = 4000;

const requestLogger = (request, response, next) => {
  console.log("Method:", request.method);
  console.log("Path:  ", request.path);
  console.log("Body:  ", request.body);
  console.log("---");
  next();
};

app.use(requestLogger);

// Endpoint 1: Text Response
app.get("/textmessage", (req, res) => {
  res.send("This is a simple text response.");
});

// Endpoint 2: JSON Response
app.get("/jsonmessage", (req, res) => {
  const jsonData = {
    message: "This is a JSON response.",
  };
  res.json(jsonData);
});

// Endpoint 3: HTML Response
app.get("/htmlmessage", (req, res) => {
  const htmlContent = `
    <html>
    <body>
    <p>This is HTML content.</p>
    </body>
    </html>`;
  res.send(htmlContent);
});

// Endpoint 4: HTML Response
app.get("/info", (req, res) => {
  const currentTime = new Date().toLocaleTimeString();
  const htmlResponse = `
    <html>
    <body>
    <h1>Hello, user!</h1>
    <p>Request received at: ${currentTime}</p>
    </body>
    </html>`;
  res.send(htmlResponse);
});

const unknownEndpoint = (request, response) => {
  response.status(404).send({ error: "unknown endpoint" });
};

app.use(unknownEndpoint);

// Start the server
app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
