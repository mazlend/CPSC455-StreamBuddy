const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    googleId: {type: String, required: true},
    imageUrl: {type: String },
    email: { type: String, required: true, unique: true },
    displayName: { type: String, required: true },
    lastName: { type: String },
    firstName: { type: String }

});

module.exports = mongoose.model('User', userSchema);