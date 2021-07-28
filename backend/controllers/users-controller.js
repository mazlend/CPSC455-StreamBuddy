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
        if (req.body === null || user.watched.includes(req.body)) {
            console.log("this film already exists in your watched list");
        } else {
            user.watched.push(req.body);
            await user.save();
            res.status(200).json({user: user});
            console.log(user);
        }
    } catch (e) {
        console.log(e);
    }
}

//     try {
//         user.watched.push(req.body);
//         await user.save();
//         res.status(200).json({user: user})
//     } catch (e) {
//         console.log(e);
//     }
// }


// const updateUserWatched = async (req, res) => {
//     let userId = req.params.id;
//     let user;
//     try {
//         user = await User.findById(userId);
//     } catch (e) {
//         console.log(e);
//     }
//
//     if (mongoose.Types.ObjectId.isValid(req.body)) {
//         console.log("film id is valid")
//     } else {
//         console.log("invalid film id");
//     }
//
//     try {
//         user.watched.push(req.body);
//         await user.save();
//         res.status(200).json({user: user})
//     } catch (e) {
//         console.log(e);
//     }
// }

const getWatchedByUserId = async (req, res) => {
    const userId = req.params.id;

    let userWithWatched;
    try {
        userWithWatched = await User.findById(userId).populate('films');
        res.json({ watched: userWithWatched.watched.map(film => film.toObject({ getters: true })) });
    } catch (err) {
        console.log(err);
    }
};





// const updateUser = async (req, res) => {
//     console.log(req.body);
//     try {
//         let user = await User.findByIdAndUpdate(req.params.googleId, req.body,
//             { runValidators: true });
//         res.status(200).json({
//             data : {user: user}
//         })
//     } catch (err) {
//         res.status(404).json({
//             message: err
//         })
//     }
// }

exports.getUsers = getUsers;
exports.getUser = getUser;
exports.createUser = createUser;
exports.updateUserWatched = updateUserWatched;

