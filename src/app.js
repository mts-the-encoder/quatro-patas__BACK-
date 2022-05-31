const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const config = require('./config');

const app = express();
const router = express.Router();

//|-/ SWAGGER
const swaggerUI = require('swagger-ui-express'); 
const swaggerJsDoc = require('swagger-jsdoc');
const swaggerDoc = require('../swagger.json');

const specs = swaggerJsDoc(swaggerDoc);

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

app.use(bodyParser.json({
    limit: '5mb'
}));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.json());
app.use('/api-docs', swaggerUI.serve, swaggerUI.setup(specs));

//|-/ CORS
app.use(function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
    next();
});

app.use('/', indexRoute);
app.use('/pets', petsRoute);
app.use('/company', companyRoute);
module.exports = app;