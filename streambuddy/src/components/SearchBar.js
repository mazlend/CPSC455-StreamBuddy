import React from "react";
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';


function SearchBar(props) {
    const [value, setValue] = React.useState(null);
    const [inputValue, setInputValue] = React.useState('');


    //Saad just as explanation: value is the movie the user selects in the end, inputValue is the thing the user types in
    // ideally we want to show the available movies based on the user input, not the value

    return(
    <Autocomplete
        id="search-box-title"
        options={props.allMovies}
        getOptionLabel={(option) => option.moviename}
        style={{width: 300}}
        renderInput={(params) => <TextField {...params} label="Search for Title" variant="outlined"/>}
        freeSolo="true"
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
          props.updateSelectedMovie(newValue.moviename);
        }}
        inputValue={inputValue}
        onInputChange={(event, newInputValue) => {
          setInputValue(newInputValue);
          props.updateSearchedMovie(newInputValue);
        }}
    />
    );
}

export default SearchBar;