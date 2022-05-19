const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const router = express.Router();

//|-/ Routes
const indexRoute = require('./routes/index-route'); 
const petsRoute = require('./routes/pets-route'); 

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use('/', indexRoute);
app.use('/pets', petsRoute);
module.exports = app;