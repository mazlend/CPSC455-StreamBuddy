const axios = require('axios');
const movies = require('./movieListForDB.js');
const Film = require('../models/Film');





const mongoose = require('mongoose');
async function connectDB() {
    try {
        await mongoose.connect('mongodb+srv://streambuddy:streambuddy@cluster0.fjc4h.mongodb.net/streambuddyDB?retryWrites=true&w=majority', {
            useNewUrlParser: true
        }, {
            useUnifiedTopology: true
        });
    } catch (error) {
        handleError(error);
    }
}

connectDB();


//let movieList = [movies.movieListForDB[15],movies.movieListForDB[16], movies.movieListForDB[17], movies.movieListForDB[18]];

function movieDetailWriter(movieList) {
    try {
        movieList.forEach(async (movie, i) => {
            setTimeout(() => {
                let movieName = Object.values(movie)[0].replace(/#/g, "%23");
                const apiResp = callAPI(movieName);
            }, 500 * i);
        });

    } catch (e) {
        console.log(e);
    }
}

function callAPI(movie) {
    try {
        axios.get('http://www.omdbapi.com/?apikey=f3982b08&t=' + movie).then((res) => {
            let movieDetail = new Film(res.data);
            movieDetail.save().then(() => console.log('saved in db'));
        });
    } catch (error) {
        console.log(error.res);
    }
}

movieDetailWriter(movies.movieListForDB);