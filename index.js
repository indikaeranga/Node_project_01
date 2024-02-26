var http = require('http');

// Create a server object
http.createServer(function (req, res) {
  res.write('Hello! Welcome to Nodejs simple web application'); // Write a response to the client
  res.end(); // End the response
}).listen(3000); // The server object listens on port 3000
