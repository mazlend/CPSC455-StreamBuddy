const express = require('express');
const router = express.Router();
const userController = require('../controllers/users-controller');

// router.get('/', (req, res, next) => {
//     res.status(200).json({ message: 'GET users is working'});
//
// });

router
    .route('/')
    .get(userController.getUsers)
    .post(userController.createUser);

router
    .route('/:googleId')
    .get(userController.getUser);


module.exports = router;