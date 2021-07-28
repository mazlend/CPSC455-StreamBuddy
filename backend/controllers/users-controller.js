const User = require('../models/User');
const mongoose = require("mongoose");
const Film = require('../models/Film');

const getUsers = async (req, res) => {
    let users;
    try {
        users = await User.find();
        res.status(200).send(users);
    } catch (err) {
        res.status(404).json({
            status: 'fail',
            message: err
        })
    }
}

const getUser = async (req, res) => {
    console.log(req.body)
    try {
        let user = await User.findById(req.params.id);
        res.status(200).send(user);
    } catch (err) {
        res.status(404).json({
            message: err
        })
    }
}

const createUser = async (req, res) => {
    console.log(req.body);
    try {
        let existingUser = await User.findOne({ googleId: req.body.googleId }).exec();
        if (existingUser) {
            res.status(200).send(existingUser)
            } else {
            let newUser = await User.create(req.body);
            res.status(201).json({
                data: { user: newUser }
            })
        }
    } catch (err) {
        res.status(400).json({
            message: err
        })
    }
}

const updateUserWatched = async (req, res) => {
    let user;
    try {
        user = await User.findById(req.params.id);
        user.watched.push(req.body);
        await user.save();
        res.status(200).json({user: user})
    } catch (e) {
        console.log(e);
    }
}

const getUserWatched = async (req, res) => {
    let userWatched;
    try {
        userWatched = await User.findById(req.params.id).populate('watched');
        res.json({ watched: userWatched.watched.map(film => film.toObject({ getters: true })) });
    } catch (err) {
        console.log(err);
    }
};


exports.getUsers = getUsers;
exports.getUser = getUser;
exports.createUser = createUser;
exports.updateUserWatched = updateUserWatched;
exports.getUserWatched = getUserWatched;

