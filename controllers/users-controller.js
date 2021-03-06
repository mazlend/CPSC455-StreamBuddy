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
    let userId = req.params.id;
    try {
        let user = await User.findById(userId);
        res.status(200).send(user);
    } catch (err) {
        res.status(404).json({
            message: err
        })
    }
}

const createUser = async (req, res) => {
    try {
        let existingUser = await User.findOne({ googleId: req.body.googleId }).exec();
        if (existingUser) {
            res.status(200).send(existingUser)
            } else {
            let newUser = await User.create(req.body);
            res.status(201).send(newUser)
            }
    } catch (err) {
        res.status(400).json({
            message: err
        })
    }
}

const updateUserWatched = async (req, res) => {
    let user;
    let userId = req.params.id;
    let newItemToAddToList = req.body.item;

    try {
        user = await User.findById(userId);
        user.watched.push(newItemToAddToList);
        await user.save();
        res.status(200).send(user)

    } catch (e) {
        res.status(400).json({
            message: e
        })
    }
}

const deleteUserWatched = async (req, res) => {
    let user;
    let userId = req.params.id;
    let itemToDeleteFromList = req.body._id;
    try {
        user = await User.findById(userId);
        const movieToDeleteIndex = (element) => element._id === itemToDeleteFromList;
        user.watched.splice(user.watched.findIndex(movieToDeleteIndex), 1);
        await user.save();
        res.status(200).send(user);
    } catch (e) {
        res.status(400).json({
            message: e
        })
    }
}

const updateUserWatchlist = async (req, res) => {
    let user;
    let userId = req.params.id;
    let newItemToAddToList = req.body.item;

    try {
        user = await User.findById(userId);
        user.watchlist.push(newItemToAddToList);
        await user.save();
        res.status(200).send(user);
    } catch (e) {
        res.status(400).json({
            message: e
        })
    }
}

const deleteUserWatchlist = async (req, res) => {
    let user;
    let userId = req.params.id;
    let itemToDeleteFromList = req.body._id;
    try {
        user = await User.findById(userId);
        const movieToDeleteIndex = (element) => element._id === itemToDeleteFromList;
        user.watchlist.splice(user.watchlist.findIndex(movieToDeleteIndex), 1);
        await user.save();
        res.status(200).send(user);
    } catch (e) {
        res.status(400).json({
            message: e
        })
    }
}

const updateUserReviews = async (req, res) => {
    let user;
    let userId = req.params.id;
    let newReview = req.body.review;

    try {
        user = await User.findById(userId);
        user.reviews.push(newReview);
        await user.save();
        res.status(200).send(user);
    } catch (e) {
        res.status(400).json({
            message: e
        })
    }
}

const updateUserFollowers = async (req, res) => {
    let user;
    let userId = req.params.id;
    let newFollower = req.body.userId;

    try {
        user = await User.findById(userId);
        user.followers.push(newFollower);
        await user.save();
        res.status(200).send(user);
    } catch (e) {
        res.status(400).json({
            message: e
        })
    }
}

const updateUserFollowing = async (req, res) => {
    let user;
    let userId = req.params.id;
    let newFollowing = req.body.carduserId;

    try {
        user = await User.findById(userId);
        user.following.push(newFollowing);
        await user.save();
        res.status(200).send(user);
    } catch (e) {
        res.status(400).json({
            message: e
        })
    }
}

const deleteReview = async (req, res) => {
    let user;
    let userId = req.params.id;
    let reviewToDelete = req.body.reviewIndex;
    try {
        user = await User.findById(userId);
        user.reviews.splice(reviewToDelete, 1);
        await user.save();
        res.status(200).send(user);
    } catch (e) {
        res.status(404).json({
            message: e
        })
    }
}

const deleteFromFollowing = async (req, res) => {
    let user;
    let userId = req.params.id;
    let followingToDelete = req.body.carduser._id;

    try {
        user = await User.findById(userId);
        let index = user.following.indexOf(followingToDelete)
        user.following.splice(index, 1)
        await user.save();
    } catch (e) {
        res.status(404).json({
            message: e
        })
    }
}

const deleteFromFollowers = async (req, res) => {
    let user;
    let carduserid = req.params.id;
    let followerToDelete = req.body.user._id;

    try {
        user = await User.findById(carduserid);
        let index = user.followers.indexOf(followerToDelete)
        user.followers.splice(index, 1)
        await user.save();
    } catch (e) {
        res.status(404).json({
            message: e
        })
    }

}

const getFollowers = async (req, res) => {
    let user;
    let userId = req.params.id;
    try {
        user = await User.findById(userId).populate('followers');
        res.status(200).send(user.followers);
    } catch (e) {
        res.status(404).json({
            message: e
        })
    }
}

const getFollowing = async (req, res) => {
    let user;
    let userId = req.params.id;
    try {
        user = await User.findById(userId).populate('following');
        res.status(200).send(user.following);
    } catch (e) {
        res.status(404).json({
            message: e
        })
    }
}

exports.getUsers = getUsers;
exports.getUser = getUser;
exports.createUser = createUser;
exports.updateUserWatched = updateUserWatched;
exports.updateUserWatchlist = updateUserWatchlist;
exports.updateUserReviews = updateUserReviews;
exports.updateUserFollowers = updateUserFollowers;
exports.updateUserFollowing = updateUserFollowing;
exports.deleteUserWatched = deleteUserWatched;
exports.deleteUserWatchlist = deleteUserWatchlist;
exports.deleteReview = deleteReview;
exports.deleteFromFollowing = deleteFromFollowing;
exports.deleteFromFollowers = deleteFromFollowers;
exports.getFollowers = getFollowers;
exports.getFollowing = getFollowing;



