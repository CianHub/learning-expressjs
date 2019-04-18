// NodeJS core modules
const http = require('http');

// Third party packages
const express = require('express');

// Creates an express object
const app = express();

// Allows for adding middleware
app.use((req, res, next) => {});

// An express object is a valid requestHandler
const server = http.createServer(app);

server.listen(3000);
