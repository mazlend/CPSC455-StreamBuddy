const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');

dotenv.config({ path: './config/.env'});

const filmsRoutes = require('./routes/films-routes');
const usersRoutes = require('./routes/users-routes');

const app = express();

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PATCH, DELETE');
    next();
});

app.use(cors());
app.use(express.json());

app.use('/api/films', filmsRoutes);
app.use('/api/users', usersRoutes);




mongoose.connect('mongodb+srv://streambuddy:streambuddy@cluster0.fjc4h.mongodb.net/streambuddyDB?retryWrites=true&w=majority', {
            useNewUrlParser: true
        }, {
            useUnifiedTopology: true
        }).then(() => {
        console.log('DB connection successful');
        app.listen(process.env.PORT || 5000, () => {
            console.log("Server Started");
        })
    })
    .catch(err => {
        console.log(err);
    });