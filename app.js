// NodeJS core modules
const http = require('http');

// Third party packages
const express = require('express');

// Creates an express object
const app = express();

//Allows for adding middleware
// Next() allows us to get to the next middleware
app.use((req, res, next) => {
  console.log('I always run');
  next();
});

// Don't use next if returning a response
app.use('/test-path', (req, res, next) => {
  res.send('<h1>Testing</h1>');
});

// res.send allows us to send a response and attach a body of type any
// '/' is the default path if not specified
app.use('/', (req, res, next) => {
  console.log('Thats an express object');
  res.send('<h1>yo</h1>');
});

// An express object is a valid requestHandler
// Listen method combines nodes http create server and listen methods into one
app.listen(3000);
