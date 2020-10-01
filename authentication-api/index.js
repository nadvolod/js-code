const express = require('express');
const app = express();
const mongoose = require('mongoose');
const dotenv = require('dotenv')
//Import Routes
const authRoute = require('./routes/auth');

//needed to set our environment variables that are coming from .env file
dotenv.config();

//Connect to DB
mongoose.connect(
    process.env.DB_CONNECT,
    { useNewUrlParser: true },
    ()=> console.log('Connected to db!'))

//Middleware
app.use(express.json());
//Route middleware
app.use('/api/user', authRoute);

app.listen(3001, ()=> console.log('Server is running'))