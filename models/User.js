const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const uniqueValidator = require('mongoose-unique-validator');

const userSchema = new Schema({
    googleId: {type: String, required: true, unique: true },
    imageUrl: {type: String },
    email: { type: String, required: true, unique: true },
    name: { type: String, required: true },
    givenName: { type: String },
    familyName: { type: String },
    watched: [{}],
    watchlist: [{}],
    followers: [{type: mongoose.Schema.Types.ObjectId, ref: 'User'}],
    following: [{type: mongoose.Schema.Types.ObjectId, ref: 'User'}],
    reviews: [{}],
});

userSchema.plugin(uniqueValidator)
module.exports = mongoose.model('User', userSchema);