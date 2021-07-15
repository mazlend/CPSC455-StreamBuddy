const express = require('express');
const router = express.Router();
const mongoose = require("mongoose");
const filmSchema = require("../models/Film")
const Film = mongoose.model('Film', filmSchema)

router.get('/', async function (req, res, next) {
    // res.status(200).json({ message: 'GET Films is working'});
    let filmName = req.body.name;
    try {
        let filmData = await Film.find({Title: filmName});
        res.send(filmData);
    } catch (err) {
        res.send(err);
    }
});

module.exports = router;