const express = require('express');
const router = express.Router();
const userController = require('../controllers/users-controller');

router.route('/').get(userController.getUsers);
router.route('/').post(userController.createUser);

router.route('/:id').get(userController.getUser);
router.route('/:id/followers').get(userController.getFollowers);
router.route('/:id/following').get(userController.getFollowing);
router.route('/:id/watched').put(userController.updateUserWatched);
router.route('/:id/watched').delete(userController.deleteUserWatched);
router.route('/:id/watchlist').put(userController.updateUserWatchlist);
router.route('/:id/watchlist').delete(userController.deleteUserWatchlist);
router.route('/:id/reviews').put(userController.updateUserReviews);
router.route('/:id').delete(userController.deleteReview);
router.route('/:id/followers').put(userController.updateUserFollowers);
router.route('/:id/following').put(userController.updateUserFollowing);

module.exports = router;