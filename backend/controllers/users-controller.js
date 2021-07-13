const User = require('../models/User');

const getUser = async (req, res) => {
    try {
        let user = await User.findById(req.params.id)
        res.status(200).send(user);
    } catch (err) {
        res.status(404).json({
            message: err
        })
    }
}

const createUser = async (req, res) => {
    try {
        let existingUser = await User.findOne({ email: req.body.email })
        if (!existingUser) {
            let newUser = await User.create(req.body);
            res.status(201).json({
                user: newUser
            })}
    } catch (err) {
        res.status(400).json({
            message: err
        })
    }
}
exports.createUser = createUser;
exports.getUser = getUser;
