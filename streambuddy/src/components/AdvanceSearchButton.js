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
        console.log(props.country);
        //    console.log(props.language);
        //    console.log(props.genre);
        //    console.log(props.actors);
       
        if (props.country) {
            let countries = queryWriter(props.country);
            query.push({Country: countries});
        } else {
            
        }

        if (props.language) {
            let languages = queryWriter(props.language);
            query.push({Language: languages});
        }
        if (props.genre) {
            let genres = queryWriter(props.genre);
            query.push({Genre: genres});
        }
        if (props.actors) {
            let actors = queryWriter(props.actors);
            query.push({Actor: actors});
        }


        function queryWriter(property) {
            let propArray = [];
            for (let item in property) {
                propArray.push((property[item]));
            }
            let result = propArray.map(({ item }) => item);
            return result;
        }
       //console.log(query);
       let queryObject = Object.assign({}, ...query);

        console.log(queryObject);



        // axios.get("http://localhost:5000/api/films/" + props.filmName)
        //     .then((response) => {
        //         props.listCallback(response.data)
        //     })
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