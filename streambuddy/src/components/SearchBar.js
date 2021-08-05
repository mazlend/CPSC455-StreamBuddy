import React, { useState } from "react";
import TextField from '@material-ui/core/TextField';
import Autocomplete, { createFilterOptions } from '@material-ui/lab/Autocomplete';
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
    searchbar: {
        ...theme.searchbar
    }
}));

function SearchBar(props) {
    const classes = useStyles();

    // const [inputValue, setInputValue] = React.useState({name:''});
    const [filmName, setFilmName] = useState("");

    // function recorder(event, value) {
    //     const {name} = event.target;

    //     setInputValue(existingVal => {
    //         return {
    //             [name]:value
    //         };
    //     });
    //    // console.log(value);
    // }

    function handleChange(event, newInputValue) {
        if (newInputValue !== null) {
            console.log(newInputValue);
            setFilmName(newInputValue.Title);
            props.parentCallBack(newInputValue.Title);
        }
    }

    const filterOptions = createFilterOptions({
        matchFrom: 'start',
        limit: 20,
    });

    return (
        <div>
            {/* <div>{`inputValue: '${filmName.Title}'`}</div> */}
            <Autocomplete
                background="transparent"
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