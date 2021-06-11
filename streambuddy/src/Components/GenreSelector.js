import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import FormLabel from '@material-ui/core/FormLabel';
import FormControl from '@material-ui/core/FormControl';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormHelperText from '@material-ui/core/FormHelperText';
import Checkbox from '@material-ui/core/Checkbox';

export default function GenreSelector() {

    return (
        <FormControl>
            <FormLabel>Select Genre</FormLabel>
            <FormControlLabel
            control={<Checkbox/>}
            label="Comedy"
            />
            <FormControlLabel
            control={<Checkbox/>}
            label="Drama"
            />
            <FormControlLabel
            control={<Checkbox/>}
            label="Documentary"
            />
            <FormControlLabel
            control={<Checkbox/>}
            label="History"
            />
            <FormControlLabel
            control={<Checkbox/>}
            label="Thriller"
            />
        </FormControl>
    );
}