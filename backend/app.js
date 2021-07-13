const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const filmsRoutes = require('./routes/films-routes');
const usersRoutes = require('./routes/users-routes');

const app = express();

app.use(bodyParser.json());

app.use('/api/films', filmsRoutes);
app.use('/api/users', usersRoutes);




mongoose.connect('mongodb+srv://streambuddy:streambuddy@cluster0.fjc4h.mongodb.net/myFirstDatabase?retryWrites=true&w=majority',
    { useNewUrlParser: true, useUnifiedTopology: true})
    .then(() => {
        app.listen(5000);
        console.log('DB connection successful');
    })
    .catch(err => {
        console.log(err);
    });