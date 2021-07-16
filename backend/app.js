const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');

dotenv.config({ path: './config/.env' });

const filmsRoutes = require('./routes/films-routes');
const usersRoutes = require('./routes/users-routes');

const app = express();

app.use('/api/films', filmsRoutes);
app.use('/api/users', usersRoutes);

app.use(cors());
app.use(express.json());

mongoose.connect(`${process.env.START_MONGODB}${process.env.MONGODB_USERNAME}:${process.env.MONGODB_PASSWORD}${process.env.END_MONGODB}`,
    { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true })
    .then(() => {
        console.log('DB connection successful');
        app.listen(process.env.PORT || 5000, () => {
            console.log("Server Started");
        })
    })
    .catch(err => {
        console.log(err);
    });