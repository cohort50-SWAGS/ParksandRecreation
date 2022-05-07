const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// User's information is stored on Mongo DB Atlas
const mongoURI = 'mongodb+srv://swags:parksandrec@cluster0.n5ovd.mongodb.net/parksandrecusers?retryWrites=true&w=majority'

mongoose.connect(mongoURI, {
    useNewUrlParser: true,
    dbName: 'parksandrecusers'
})

.then(() => console.log('Connected to Parks and Rec Users DB.'))
.catch(err => console.log(err));


// const SALT_WORK_FACTOR = 10;
// const bcrypt = require('bcrypt')


const userSchema = new Schema ({
    // _id: Number,
    // username: {type: String, required: true, unique: true},
    username: String,
    // password: {type: String, required: true},
    password: String,
  
})


module.exports = mongoose.model('User', userSchema);