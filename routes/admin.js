const express = require('express');
const path = require('path');

// Creates a router object which can be exported
// Its a bit like a mini Express app that can be plugged into the main express app
// Contains all the post, get etc methods
const router = express.Router();

// Don't use next if returning a response
// Can only use 1 res.send() in a middleware
router.get('/add-product', (req, res, next) => {
  res.sendFile(path.join(__dirname, '../', 'views', 'add-product.html'));
});

// res.redirect combines node redirect methods in one method
// can access the body with req.body
// must parse body first with body-parser
// Make sure body-parser is installed as a middleware
// Can use get/post etc instead of use to filter for the specified requests only
router.post('/product', (req, res, next) => {
  console.log(req.body);
  res.redirect();
});

module.exports = router;
