const express = require('express');
const bodyParser = require('body-parser');

//config env vars
const dotenv = require('dotenv');
dotenv.config();

//connect to db
require('./db/mongoose.js');

//import models and routers
const User = require('./models/users.js');
const userRouter = require('./routers/users.js');

//express middleware and config
const app = express();

//app.use(express.urlencoded({extended: false}));
app.use(bodyParser.urlencoded({ extended: false }))
app.use(userRouter);

module.exports = app;