const express = require('express');
const app = express();
const mongoose = require('mongoose');
const dotenv = require('dotenv')

//needed to set our environment variables that are coming from .env file
dotenv.config();

mongoose.connect(
    process.env.DB_CONNECT,
    { useNewUrlParser: true },
    ()=> console.log('Connected to db!'))

const authRoute = require('./routes/auth');

app.use('/api/user', authRoute);

app.listen(3001, ()=> console.log('Server is running'))