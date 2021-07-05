const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const filmSchema = new Schema({
    Title: { type: String, require: true },
    Year: { type: Number, min: 1900, max: 2025 },
    Rated: { type: String },
    Released: {type: Date },
    Runtime: { type: String},
    Genre: { type: String},
    Director: { type: String },
    Writer: { type: String },
    Plot: { type: String, required: true },
    Language: { type: String , required: true },
    Country: { type: String, required: true },
    Awards: { type: String },
    Poster: { type: String },
    Ratings: [
        {
            Source: { type: String },
            Value: { type: Schema.Types.Decimal128 }
        },
        {
            Source: { type: String },
            Value: { type: Schema.Types.Decimal128 }
        },
        {
            Source: { type: String },
            Value: { type: Schema.Types.Decimal128 }
        }
        ],
    imdbRating: { type: Schema.Types.Decimal128 },
    imdbVotes: { type: Number },
    imdbId: { type: String },
    BoxOffice: { type: Number },
    Production: { type: String },

});

module.exports = mongoose.model('Film', filmSchema);