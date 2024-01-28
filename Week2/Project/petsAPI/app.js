const express = require("express");
const app = express();
const port = 3001;

const requestLogger = (request, response, next) => {
    console.log("name:", request.name);
    console.log("species:  ", request.species);
    console.log("age:  ", request.age);
    console.log("color:  ", request.color);
    console.log("weight:  ", request.weight);
    next();
  };

app.use(requestLogger);

app.get("/pets", getAllPets)

app.get("/pets", createPet)



const unknownEndpoint = (request, response) => {
    response.status(404).send({ error: "unknown endpoint" });
  };
  
  app.use(unknownEndpoint);
  
  // Start the server
  app.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
  });