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

        // if (props.searchOptions.length < 1) {
        //     return
        // }
        let query = [];
        console.log(props.yearOfRelease);
        //    console.log(props.language);
        //    console.log(props.genre);
        //    console.log(props.actors);
       
        if (props.country) {
            let countries = queryWriter(props.country);
            let result = countries.map(({ item }) => item);
            query.push({country: result});
        } else {
            
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
            query.push({genre: result});
        }
        if (props.yearOfRelease) {
            let releaseYear = queryWriter(props.yearOfRelease);
            query.push({years: releaseYear});
        }


        function queryWriter(property) {
            console.log(property);
            let propArray = [];
            for (let item in property) {
                propArray.push((property[item]));
            }
            return (propArray);
            let result = propArray.map(({ item }) => item);
            return result;
        }
       //console.log(query);
       let queryObject = Object.assign({}, ...query);

        console.log(JSON.stringify(queryObject));




        axios.post("http://localhost:5000/api/films/search", queryObject)
            .then((response) => {
                props.listCallback(response.data)
            })

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