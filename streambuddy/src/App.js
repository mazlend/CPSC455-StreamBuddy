
import MoviecardList from "./components/MoviecardList";
import SearchBar from "./components/SearchBar";
import {BrowserRouter, Route, Switch} from "react-router-dom";
import {Navbar} from "./components/Navbar";

import theme from "./components/Theme";
import {ThemeProvider} from "@material-ui/styles";

import AdvanceButton from "./components/AdvanceButton";
import AutocompletePlusCheckbox from "./components/AutocompletePlusCheckbox";

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
    { item: 'United States of America'}
];

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
                        <br/>
                        <br/>
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