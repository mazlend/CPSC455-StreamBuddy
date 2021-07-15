const User = require('../models/User');

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
    try {
        let user = await User.findOne({googleId: req.body.googleId});
        res.status(200).send(user);
    } catch (err) {
        res.status(404).json({
            message: err
        })
    }
}

const createUser = async (req, res) => {
    try {
        let existingUser = await User.findOne({ googleId: req.body.googleId})
        if (existingUser) {
            res.status(200).json({
                user: existingUser
            })} else {
            let newUser = await User.create(req.body);
            res.status(201).json({
                user: newUser
            })
        }
    } catch (err) {
        res.status(400).json({
            message: err
        })
    }
}

exports.getUsers = getUsers;
exports.getUser = getUser;
exports.createUser = createUser;
