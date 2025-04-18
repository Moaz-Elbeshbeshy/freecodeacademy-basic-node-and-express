let express = require('express');
let app = express();

// Log 'Hello World' to the console
console.log('Hello World');

// Use dynamic port from the environment or default to 3000
const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});

module.exports = app;
