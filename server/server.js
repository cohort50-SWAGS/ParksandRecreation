const express = require('express'); // backend web application framework for Node.js
const app = express(); // creates an express application
const PORT = 3000; // defining the port number for later use with express' listen module



app.listen(PORT, () => {
    console.log(`Server listening on port: ${PORT}...`)
})

module.exports = app;