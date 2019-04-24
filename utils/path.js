const path = require('path');

// this sets path.dirname to be the path to the file that starts the app e,g, in our case app.js
module.exports = path.dirname(process.mainModule.filename);
