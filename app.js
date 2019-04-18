// NodeJS core modules
const http = require('http');

// Third party packages
const express = require('express');

// Creates an express object
const app = express();

// Allows for adding middleware
app.use((req, res, next) => {
  console.log(app);
  next();
});

// Next allows us to get to the next middleware
app.use((req, res, next) => {
  console.log('Thats an express object');
});

// An express object is a valid requestHandler
const server = http.createServer(app);

server.listen(3000);
