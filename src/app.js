const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const app = express();
const router = express.Router();

//|-/ DbConnect - Mongo
const dbUser = 'mts';
const dbPasswd = 'urubu100';
mongoose.connect(`mongodb+srv://${dbUser}:${dbPasswd}@quatropatas.zjhon.mongodb.net/Data`);


//|-/ Routes
const indexRoute = require('./routes/index-route'); 
const petsRoute = require('./routes/pets-route'); 

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use('/', indexRoute);
app.use('/pets', petsRoute);
module.exports = app;