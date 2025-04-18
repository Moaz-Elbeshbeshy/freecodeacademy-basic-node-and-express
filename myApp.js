let express = require('express');
let app = express();

// Log 'Hello World' to the console
console.log('Hello World');

// Use dynamic port from the environment or default to 5000
const port = process.env.PORT || 5000;

// Start the server without logging any default messages
app.listen(port, () => { });  // Remove any callback to suppress default log

module.exports = app;
