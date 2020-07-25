const express = require('express');

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
const port = process.env.PORT;

app.use(express.json());
app.use(userRouter);

app.listen(port, () => {
    console.log('Server on port', port)
});