import React from "react";
import TextField from '@material-ui/core/TextField';
import Autocomplete, { createFilterOptions } from '@material-ui/lab/Autocomplete';


function SearchBar(props) {

    function handleChange(event, newInputValue) {
        if (newInputValue !== null) {
            props.parentCallBack(newInputValue.Title);
        }
    }

    const filterOptions = createFilterOptions({
        matchFrom: 'start',
        limit: 20,
    });

    return (
        <div>
            <Autocomplete
                id="search-box-title"
                options={props.autoCompleteData}
                getOptionLabel={props.getOptionLabel}
                style={props.style}
                filterOptions={filterOptions}
                onChange={handleChange}
                renderInput={(params) => <TextField {...params} label={props.title} variant="outlined" />}
            />
        </div>
    );
}

export default SearchBar;