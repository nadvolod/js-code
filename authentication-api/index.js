const express = require('express');
const app = express();
const mongoose = require('mongoose');

mongoose.connect(
    'mongodb+srv://nikolay1:Test12345@cluster0.azx4b.mongodb.net/test?retryWrites=true&w=majority',
    { useNewUrlParser: true },
    ()=> console.log('Connected to db!'))

const authRoute = require('./routes/auth');

app.use('/api/user', authRoute);

app.listen(3001, ()=> console.log('Server is running'))