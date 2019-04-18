const express = require('express');

// Creates a router object which can be exported
// Its a bit like a mini Express app that can be plugged into the main express app
// Contains all the post, get etc methods
const router = express.Router();

// res.send allows us to send a response and attach a body of type any
// '/' is the default path if not specified
router.use('/', (req, res, next) => {
  res.send('<h1>Shop</h1>');
});

module.exports = router;
