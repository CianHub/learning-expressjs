// Third party packages
const express = require('express');
const bodyParser = require('body-parser');

// Project packages
const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');

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

// Can use an imported router object as a middleware
app.use(adminRoutes);

// Can use an imported router object as a middleware
app.use(shopRoutes);

// An express object is a valid requestHandler
// Listen method combines nodes http create server and listen methods into one
app.listen(3000);
