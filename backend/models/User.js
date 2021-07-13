const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const uniqueValidator = require('mongoose-unique-validator');

const userSchema = new Schema({
    googleId: {type: String, required: true},
    imageUrl: {type: String },
    email: { type: String, required: true, unique: true },
    name: { type: String, required: true },
    lastName: { type: String },
    firstName: { type: String }

});

userSchema.plugin(uniqueValidator)

module.exports = mongoose.model('User', userSchema);