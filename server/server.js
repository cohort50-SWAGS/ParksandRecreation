const express = require('express'); // backend web application framework for Node.js
const app = express(); // creates an express application
const PORT = 3000; // defining the port number for later use with express' listen module
const mongoose = require('mongoose'); // framework for the backend
const dbController = require('./controllers/db.js') // 
const path = require('path');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    return res.status(200).sendFile(path.join(__dirname, '../index.html'));
});

app.use(express.static(__dirname + '/../dist'));

// app.get('/db/login', dbController.logIn, (req, res) => {
//     res.status(200).json(res.locals.user)
// });

app.post('/db/login', dbController.logIn, 
    dbController.verify,
    (req, res) => {
    res.status(200).json(res.locals.response)
})

app.post('/db/add', dbController.add, (req, res) => {
    res.status(200).json(res.locals.newUser)
})

app.use('*', (req,res) => {
    res.status(404).send('Not Found');
  });
  
  app.use((err, req, res, next) => {
    console.log(err);
    res.status(500).send({ error: err });
  });

app.listen(PORT, () => {
    console.log(`Server listening on port: ${PORT}...`)
})

module.exports = app;