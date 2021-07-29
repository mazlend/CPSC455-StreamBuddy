const express = require('express');
const router = express.Router();
const userController = require('../controllers/users-controller');

router.route('/').get(userController.getUsers);
router.route('/').post(userController.createUser);

router.route('/:id').get(userController.getUser);
router.route('/watched/:id').put(userController.updateUserWatched);
router.route('/watchlist/:id').put(userController.updateUserWatchlist);
router.route('/reviews/:id').put(userController.updateUserReviews);

module.exports = router;