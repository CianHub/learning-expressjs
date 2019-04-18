// NodeJS core modules
const http = require('http');

// Third party packages
const express = require('express');
const bodyParser = require('body-parser');

// Creates an express object
const app = express();

// This registers the body-parser middleware
// Has an implicit next()
// Will parse the body automatically
app.use(bodyParser.urlencoded({ extended: false }));

//Allows for adding middleware
// Next() allows us to get to the next middleware
app.use((req, res, next) => {
  next();
});

// Don't use next if returning a response
// Can only use 1 res.send() in a middleware
app.use('/test-path', (req, res, next) => {
  res.send(
    '<form action="/test-landing" method="POST"><input type="text" name="title"><button type="submit">Submit</button></form>'
  );
});

// res.redirect combines node redirect methods in one method
// can access the body with req.body
// must parse body first with body-parser
// Make sure body-parser is installed as a middleware
// Can use get/post etc instead of use to filter for the specified requests only
app.post('/test-landing', (req, res, next) => {
  console.log(req.body);
  res.redirect();
});

// res.send allows us to send a response and attach a body of type any
// '/' is the default path if not specified
app.use('/', (req, res, next) => {
  res.send('<h1>yo</h1>');
});

// An express object is a valid requestHandler
// Listen method combines nodes http create server and listen methods into one
app.listen(3000);
