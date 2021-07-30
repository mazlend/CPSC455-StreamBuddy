import React from 'react';
import {
    makeStyles
} from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import axios from 'axios';

const useStyles = makeStyles((theme) => ({
    root: {
        '& > *': {
            margin: theme.spacing(1),
        },
    },
    button: {
        ...theme.button
    }
}));


export default function AdvanceSearchButton(props) {
    const classes = useStyles();

    function advanceSearch() {
        let query = [];
        if (props.country) {
            let countries = queryWriter(props.country);
            let result = countries.map(({ item }) => item);
            query.push({country: result});
        } 
        if (props.language) {
            let languages = queryWriter(props.language);
            let result = languages.map(({ item }) => item);
            query.push({language: result});
        }
        if (props.genre) {
            let genres = queryWriter(props.genre);
            let result = genres.map(({ item }) => item);
            query.push({genre: result});
        }
        if (props.actors) {
            let allActors = queryWriter(props.actors);
            let result = allActors.map(({ item }) => item);
            query.push({actors: result});
        }
        if (props.yearOfRelease[0] > 0 && props.yearOfRelease[1] > 0 ) {
            let releaseYear = queryWriter(props.yearOfRelease);
            query.push({years: releaseYear});
        }
        if (props.imdbRating[0] > 0 && props.imdbRating[1] > 0 ) {
            let ratingsImdb = queryWriter(props.imdbRating);
            query.push({rating: ratingsImdb});
        }

        function queryWriter(property) {
            console.log(property);
            let propArray = [];
            for (let item in property) {
                propArray.push((property[item]));
            }
            return (propArray);
        }
      
       let queryObject = Object.assign({}, ...query);

        axios.post("http://localhost:5000/api/films/search", queryObject)
            .then((response) => {
                props.listCallback(response.data)
            });
    }
    return (
        <div>
            <
            Button
            onClick={advanceSearch}
                    style={{marginLeft: -20}}
                    variant="contained"
                    color="primary"
                    className={classes.button}>
                    Search
                </Button> 
                <Button
                onClick={props.resetList}
                style={{marginLeft: 10}}
                variant="contained"
                color="primary"
                className={classes.button}>
                Reset
            </Button>
        </div>
    );
}