import React, {useState}  from "react";
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import {initialmoviesdata} from "../initialmovies";
import {makeStyles} from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
    searchbar: {
        ...theme.searchbar
    }
}));





function SearchBar (props) {
    const classes = useStyles();

   
    const [inputValue, setInputValue] = React.useState({name:''});

    function recorder(event, value) {
        const {name} = event.target;

        setInputValue(existingVal => {
            return {
                [name]:value
            };
        });
       // console.log(value);
    }
    

    return(
        
    <Autocomplete
        background="transparent"
        id="search-box-title"
        options={props.autoCompleteData}
        getOptionLabel={(option) => option.name}
        style={props.style}
        onChange={recorder}
        renderInput={(params) => <TextField {...params} label={props.title} variant="outlined"/>}
    />
        
    );
}

export default SearchBar;