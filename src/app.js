const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const config = require('./config');

const app = express();
const router = express.Router();

//|-/ DbConnect - Mongo
const dbUser = 'mts';
const dbPasswd = 'urubu100';
mongoose.connect(config.connectionString);

//|-/ Models
const Pet = require('./models/pet');
const Company = require('./models/company');


//|-/ Routes
const indexRoute = require('./routes/index-route'); 
const petsRoute = require('./routes/pets-route'); 
const companyRoute = require('./routes/company-route'); 

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.json());

app.use('/', indexRoute);
app.use('/pets', petsRoute);
app.use('/company', companyRoute);
module.exports = app;