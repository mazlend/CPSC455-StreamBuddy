const fs = require('fs');
const Film = require('../models/Film.js');

var movies = [];

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


async function fileMaker(movies) {
    const titleReader = await dbTitleReader();
    const writeFile = await fileWriter(movies);
    console.log(movies[1000]);

}


async function dbTitleReader() {
    try {
        await Film.find((err, films) => {
            err ? console.log(err) : null;
            films.forEach((movie) => {
                movies.push({
                    Title: movie.Title
                });
            });

        });

    } catch (e) {
        console.log(e);
    }
}


//console.log (movies[100]);
function fileWriter(movies) {
  fs.writeFile('movieListForAutoComplete.js', JSON.stringify(movies), function (err) {
    if (err)
        return console.log(err);
});
}

fileMaker(movies);
