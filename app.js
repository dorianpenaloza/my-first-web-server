const express = require('express'); //bringing in express library

const app = express();

app.get('/:message', function(request, response, next) {
  const message = request.params.message;
  return response.json(message);
});

const port = 3000;

app.listen(port, function() {
  console.log(`Listening on port: ${port}`);
});
