const express = require('express'); // backend web application framework for Node.js
const app = express(); // creates an express application
const PORT = 3000; // defining the port number for later use with express' listen module
const mongoose = require('mongoose'); // framework for the backend
const path = require('path');

const dbRouter = require('./routes/dbRouter.js');
const apiRouter = require('./routes/apiRouter.js');
const loginRouter = require('./routes/loginRouter.js');
const addUserRouter = require('./routes/addUserRouter.js');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api', apiRouter);
app.use('/db', dbRouter);
app.use('/login', loginRouter);
app.use('/addUser', addUserRouter);

app.get('/', (req, res) => {
    return res.status(200).sendFile(path.join(__dirname, '../index.html'));
});

app.use(express.static(__dirname + '/../dist'));

// app.get('/db/login', dbController.logIn, (req, res) => {
//     res.status(200).json(res.locals.user)
// });
// on open main page
// api/gettrips
// db/getsavedtrips send you trips  
// db/savetrip


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