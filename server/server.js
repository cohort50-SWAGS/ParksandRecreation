const express = require('express'); // backend web application framework for Node.js
const app = express(); // creates an express application
const PORT = 3000; // defining the port number for later use with express' listen module
const mongoose = require('mongoose'); // framework for the backend
const dbController = require('./controllers/db.js') // 


app.post('/db/login', dbController.logIn, (req, res) => {
    res.status(200).json(res.locals.user)
})

app.post('/db/add', dbController.add, (req, res) => {
    res.status(200).json(res.locals.user)
})

app.listen(PORT, () => {
    console.log(`Server listening on port: ${PORT}...`)
})

module.exports = app;