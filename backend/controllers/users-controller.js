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

const updateUser = async (req, res) => {
    console.log(req.body);
    console.log(req.params.id);
    try {
        let user = await User.findByIdAndUpdate(req.params.id, req.body,
            { runValidators: true });
        res.status(200).json({
            data : {user: user}
        })
    } catch (err) {
        res.status(404).json({
            message: err
        })
    }
}

exports.getUsers = getUsers;
exports.getUser = getUser;
exports.createUser = createUser;
exports.updateUser = updateUser;

