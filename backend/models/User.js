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
    watched: [{type: Schema.Types.ObjectId, ref: 'Film'}],
    watchlist: [{type: Schema.Types.ObjectId, ref: 'Film'}],
    followers: [{type: Schema.Types.ObjectId, ref: 'User'}],
    following: [{type: Schema.Types.ObjectId,  ref: 'User'}],
    reviews: [ {movie: {type: Schema.Types.ObjectId, ref: 'Film'},
                comment: {type: String},
                rating: {type: Number},
                note: {type: String},
                recommendingToFriends: [{name: {type: String}, shortComment: {type: String}}] }]

});

userSchema.plugin(uniqueValidator)
module.exports = mongoose.model('User', userSchema);