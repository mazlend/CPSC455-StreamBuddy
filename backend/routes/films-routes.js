const express = require('express');
const router = express.Router();
const mongoose = require("mongoose");
const filmSchema = require("../models/Film")
const Film = mongoose.model('Film', filmSchema)

router.get('/:id', async function (req, res, next) {
    // res.status(200).json({ message: 'GET Films is working'});
    console.log(req.params);
    let filmName = req.params.id.replace("_", " ");
    try {
        let filmData = await Film.find({Title: filmName});
        res.send(filmData);
    } catch (err) {
        res.send(err);
    }
});

router.get('/advanced/foo', async function (req, res, next) {
    console.log(req.body);
    let queryCountry = req.body.country;
    // console.log(queryCountry);
    let queryGenre = req.body.genre;
    console.log(queryGenre);
    let results = new Set();
    try {
        let filmDataCountry = await Film.find({Country: queryCountry});
        // console.log(filmDataCountry.length);
        res.send(filmDataCountry);
    } catch (err) {
        res.send(err);
    }
 });

router.get('/', async function (req, res, next) {
    res.status(200).json({ message: 'GET Films is working'});
});

module.exports = router;