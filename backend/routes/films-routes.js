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
        let filmData = await Film.find({ Title: filmName });
        res.send(filmData);
    } catch (err) {
        res.send(err);
    }
});

router.post('/:search', async function (req, res,next) {
    console.log(req.body);
    let queryCountry = req.body.country;
    // console.log(queryCountry);
    let regexCountry;
    if (queryCountry) {
        regexCountry = new RegExp(queryCountry.join('|'));
    } else {
        regexCountry = new RegExp('.*');
    }
    let queryGenre = req.body.genre;
    // console.log(queryGenre);
    let regexGenre;
    if (queryGenre) {
        regexGenre = new RegExp(queryGenre.join('|'));
    } else {
        regexGenre = new RegExp('.*');
    }
    // console.log(regexGenre);
    let queryLanguage = req.body.language;
    let regexLanguage;
    if (queryLanguage) {
        regexLanguage = new RegExp(queryLanguage.join('|'));
    } else {
        regexLanguage = new RegExp('.*');
    }
    let queryActors = req.body.actors;
    let regexActors;
    if (queryActors) {
        regexActors = new RegExp(queryActors.join('|'));
    } else {
        regexActors = new RegExp('.*');
    }
    // let queryActors = req.body.actor;
    // let regexActors;
    // if (queryActors) {
    //     regexActors = new RegExp(queryActors.join('|'));
    // } else {
    //     regexActors = new RegExp('.*');
    // }
    let queryYears = req.body.years;
    let regexYears = new Array(2);
    // console.log(queryYears);
    if (queryYears) {
        regexYears[0] = queryYears[0].toString();
        regexYears[1] = queryYears[1].toString();
    } else {
        regexYears[0] = "1990";
        regexYears[1] = "2022";
    }
    // console.log(regexYears);
    // let queryRating = req.body.rating;
    // let regexRating = new Array(2);
    // console.log(queryRating);
    // if (queryRating) {
    //     regexRating[0] = queryRating[0].toString();
    //     regexRating[1] = queryRating[1].toString();
    // } else {
    //     regexRating[0] = "0";
    //     regexRating[1] = "10";
    // }
    try {
        // let filmDataCountry = await Film.find({Country: queryCountry});
        // console.log(filmDataCountry.length);
        let filmDataGenre = await Film.find()
            .and([
                { Genre: regexGenre },
                { Country: regexCountry },
                { Language: regexLanguage },
                { Actors: regexActors },
                //{ Year: {$gte: regexYears[0], $lte: regexYears[1]}}
                // { imdbRating: {$gte: regexRating[0], $lte: regexRating[1]}}
            ]);
        console.log(filmDataGenre.length);
        res.send(filmDataGenre);
    } catch (err) {
        res.send(err);
    }
});

router.get('/', async function (req, res, next) {
    res.status(200).json({ message: 'GET Films is working' });
});

module.exports = router;