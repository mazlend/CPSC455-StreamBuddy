const express = require('express');
const router = express.Router();
const userController = require('../controllers/users-controller');

router
    .route('/')
    .get(userController.getUsers)
    .post(userController.createUser);

router
    .route('/:id')
    .get(userController.getUser)
    .patch(userController.updateUserWatched);

module.exports = router;