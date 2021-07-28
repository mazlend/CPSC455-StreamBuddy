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
        if (props.filmName.length < 1) {
            return
        }
        axios.get("http://localhost:5000/api/films/" + props.filmName)
            .then((response) => {
                props.listCallback(response.data)
            })
    }

    return (
        <div>
            <Button
                onClick={simpleSearch}
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
