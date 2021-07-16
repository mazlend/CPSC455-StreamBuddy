const express = require('express');
const router = express.Router();
const userController = require('../controllers/users-controller');

router
    .route('/')
    .get(userController.getUsers)
    .post(userController.createUser);

router
    .route('/:googleId')
    .get(userController.getUser)



module.exports = router;