const express = require('express');
const router = express.Router();
const userController = require('../controllers/users-controller');

router
    .route('/')
    .get(userController.getUsers)
    .post(userController.createUser);

router.route('/:id').get(userController.getUser);
router.route('/watched/:id').patch(userController.updateUserWatched);
router.route('/watched/:id').get(userController.getUserWatched);

module.exports = router;