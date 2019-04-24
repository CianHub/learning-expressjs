const express = require('express');

// path is a node core module for accessing filespaths
const path = require('path');

// Creates a router object which can be exported
// Its a bit like a mini Express app that can be plugged into the main express app
// Contains all the post, get etc methods
const router = express.Router();

// res.send allows us to send a response and attach a body of type any
// '/' is the default path if not specified
router.use('/', (req, res, next) => {
  // Send file e.g. html file
  // __ dirname is a node variable that gives the path to the file using it e.g. in this case routes folder
  // path.join joins all the path parts together e.g. directory, folder, file
  // This also detects OS and auto assembles the right path
  // e.g. in below starts in routes then  goes up a level, views and then file
  res.sendFile(path.join(__dirname, '../', 'views', 'shop.html'));
});

module.exports = router;
