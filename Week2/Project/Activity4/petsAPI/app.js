const express = require("express");
const app = express();

const requestLogger = (request, response, next) => {
  console.log("name:", request.name);
  console.log("species:  ", request.species);
  console.log("age:  ", request.age);
  console.log("color:  ", request.color);
  console.log("weight:  ", request.weight);
  next();
};

app.use(requestLogger);

const {
  getAllPets,
  getPetById,
  createPet,
  updatePet,
  deletePet,
} = require("./petHandlers"); // 'petHandlers.js' contains the route handlers

// Middleware to parse JSON
app.use(express.json());

// ROUTES

// GET /pets
app.get("/pets", getAllPets);

// POST /pets
app.get("/pets", createPet);

// GET /pets/:petId
app.get("/pets/:petId", getPetById);

// PUT /pets/:petId
app.put("/pets/:petId", updatePet);

// DELETE /pets/:petId
app.delete("/pets/:petId", deletePet);

const port = 3001;

// Start the server
app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});

const unknownEndpoint = (request, response) => {
  response.status(404).send({ error: "unknown endpoint" });
};

app.use(unknownEndpoint);
