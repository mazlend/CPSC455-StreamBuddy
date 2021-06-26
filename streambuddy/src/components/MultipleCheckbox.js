import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import ListItemText from '@material-ui/core/ListItemText';
import Select from '@material-ui/core/Select';
import Checkbox from '@material-ui/core/Checkbox';


export default function MultipleCheckbox(props) {

    return (
        <FormControl>
            <InputLabel>Genres</InputLabel>
            <Select
                id="multiple-checkbox"
                multiple
                // value={personName}
                // onChange={handleChange}
                input={<Input />}
                renderValue={(selected) => selected.join(', ')}
                // MenuProps={MenuProps}
            >
                {/* {names.map((name) => (
                    <MenuItem key={name} value={name}>
                        <Checkbox checked={personName.indexOf(name) > -1} />
                        <ListItemText primary={name} />
                    </MenuItem>
                ))} */}
            </Select>
        </FormControl>
    );
}