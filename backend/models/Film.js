const mongoose = require('mongoose');
const Schema = mongoose.Schema;



const filmSchema = new Schema({
    Title: { type: String, required: true},
    Year: { type: String },
    Rated: { type: String},
    Released: {type: String },
    Runtime: { type: String},
    Genre: { type: String},
    Director: { type: String },
    Writer: { type: String },
    Actors: {type: String},
    Plot: { type: String, required: true},
    Language: { type: String, required:true},
    Country: { type: String, required:true },
    Awards: { type: String },
    Poster: { type: String },
    Ratings: [
        {
            Source: { type: String },
            Value: {type: String  }
        },
        {
            Source: { type: String },
            Value: {type: String }
        },
        {
            Source: { type: String },
            Value: { type: String}
        }
        ],
    imdbRating: {  },
    imdbVotes: {  },
    imdbId: { type: String },
    Type: {type:String},
    BoxOffice: {  },
    Production: { type: String },

});

module.exports = mongoose.model('Film', filmSchema);