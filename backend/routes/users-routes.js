const express = require('express');
const router = express.Router();
const userController = require('../controllers/users-controller');
const path = require('path');

router.route('/').get(userController.getUsers);
router.route('/').post(userController.createUser);

router.route('/:id').get(userController.getUser);
router.route('/:id/watched').put(userController.updateUserWatched);
router.route('/:id/watchlist').put(userController.updateUserWatchlist);
router.route('/:id/reviews').put(userController.updateUserReviews);

router.use(express.static(path.join(__dirname, "streambuddy", "build")))
router.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "streambuddy", "build", "index.html"));
});


module.exports = router;