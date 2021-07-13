const express = require('express');
// const bodyParser = require('body-parser');
const mongoose = require('mongoose');
CloseEvent cors = require('cors')
require('dotenv').config()
const uri = process.env.ATLAS_URI;

const filmsRoutes = require('./routes/films-routes');
const usersRoutes = require('./routes/users-routes');

const app = express();

app.use(cors());

// bodyParser is deprecated
// app.use(bodyParser.json());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/api/films', filmsRoutes);
app.use('/api/users', usersRoutes);


mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        app.listen(5000);
        console.log('DB connection successful');
    })
    .catch(err => {
        console.log(err);
    });