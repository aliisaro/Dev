const unknownEndpoint = (request, response) => {
    response.status(404).send({ error: 'unknown endpoint' });
  };
  
  const errorHandler = (error, request, response, next) => {
    console.error(error.message);
    res.status(500).send('Something broke!')
  };
  
  module.exports = {
    unknownEndpoint,
    errorHandler
  };