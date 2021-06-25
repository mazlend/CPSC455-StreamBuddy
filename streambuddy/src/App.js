
import MoviecardList from "./components/MoviecardList";
import SearchBar from "./components/SearchBar";
import {BrowserRouter, Route, Switch} from "react-router-dom";
import {Navbar} from "./components/Navbar";

import theme from "./components/Theme";
import {ThemeProvider} from "@material-ui/styles";

import AdvanceButton from "./components/AdvanceButton";
import AutocompletePlusCheckbox from "./components/AutocompletePlusCheckbox";


// all countries that we fetch from the imdb database -- in the next iteration that will probably be stored
// in the database and we hook up our database here
let allCountries = [
    { item: 'Austria'},
    { item: 'Brazil'},
    { item: 'Canada'},
    { item: 'China'},
    { item: 'Cuba'},
    { item: 'Denmark'},
    { item: 'France'},
    { item: 'Finland'},
    { item: 'Germany'},
    { item: 'Italy'},
    { item: 'Japan'},
    { item: 'Mexico'},
    { item: 'Russia'},
    { item: 'Spain'},
    { item: 'United Kingdom'},
    { item: 'United States of America'},
];

// all countries that we fetch from the imdb database
let allLanguages = [
    { item: 'German'},
    { item: 'English'},
];

function App() {
    return (
          <div className="app">
            
            <div className="navbar">
                <ThemeProvider theme={theme}>
                    <BrowserRouter>
                        <Navbar />
                        <Switch>
                            <Route exact path="/" />
                            <Route path="/Login" />
                            <Route path="/Signup" />
                        </Switch>
                    </BrowserRouter>
                </ThemeProvider>
            </div>
            <div className="content">

                <div className="search-bar">
                   <SearchBar />
                    <div className="advance-button">
                        <AdvanceButton />
                    </div>
                    <br/>
                    <br/>

                    <div>
                        <AutocompletePlusCheckbox name="countries" label="Country" items={allCountries}/>
                        <AutocompletePlusCheckbox name="languages" label="Language" items={allLanguages}/>
                    </div>

                </div>
                <div className="movie-cards">
                    <MoviecardList />
                </div>
            </div>

        </div>

        );
}

export default App;