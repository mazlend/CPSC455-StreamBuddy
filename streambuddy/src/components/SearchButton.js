import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
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


export default function SearchButton(props) {
    const classes = useStyles();

    function simpleSearch() {
        // console.log(props.filmName);
        axios.get("http://localhost:5000/api/films/" + props.filmName)
            .then((response) => {
                console.log(response.data);
            })
    }

    return (
        <div>
            <Button
                onClick={simpleSearch}
                variant="contained"
                color="primary"
                className={classes.button}>
                Search
            </Button>
        </div>
    );
}
