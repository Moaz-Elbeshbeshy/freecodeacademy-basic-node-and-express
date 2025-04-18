let express = require('express');
let app = express();
console.log('Hello World!');

const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});



































module.exports = app;
