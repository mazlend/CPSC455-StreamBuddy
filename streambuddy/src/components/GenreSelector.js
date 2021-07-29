import React, { useState } from 'react';
import Checkbox from '@material-ui/core/Checkbox';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import CheckBoxOutlineBlankIcon from '@material-ui/icons/CheckBoxOutlineBlank';
import CheckBoxIcon from '@material-ui/icons/CheckBox';

const icon = <CheckBoxOutlineBlankIcon fontSize="small" />;
const checkedIcon = <CheckBoxIcon fontSize="small" />;




export default function GenreSelector(props) {
    const [genre, setGenre] = useState("");

    
    function handleChange(event, newInputValue) {
        if (newInputValue !== null) {
            setGenre(newInputValue);
            props.genreCallBack(newInputValue);
          
        }
    }

    return (
        <Autocomplete
            onChange={handleChange}
            multiple
            id="checkboxes"
            options={props.items}
            disableCloseOnSelect
            getOptionLabel={(option) => option.item}
            renderOption={(option, { selected }) => (
                <React.Fragment>
                    <Checkbox color="primary"
                        icon={icon}
                        checkedIcon={checkedIcon}
                        style={{ marginRight: 8 }}
                        checked={selected}
                    />
                    {option.item}
                </React.Fragment>
            )}
            style={{ width: 200 }}
            renderInput={(params) => (
                <TextField {...params} variant="outlined" label={props.label} placeholder={props.label} />
            )}
        />
    );
}


