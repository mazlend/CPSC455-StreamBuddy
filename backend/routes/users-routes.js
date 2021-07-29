const express = require('express');
const router = express.Router();
const userController = require('../controllers/users-controller');

router
    .route('/')
    .get(userController.getUsers)
    .post(userController.createUser);

router.route('/:id').get(userController.getUser);
router.route('/watched/:id').put(userController.updateUserWatched);
router.route('/watchlist/:id').put(userController.updateUserWatchlist);

module.exports = router;