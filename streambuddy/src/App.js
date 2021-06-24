import React from 'react';
import MoviecardList from "./components/MoviecardList";
import SearchBar from "./components/SearchBar";
import {BrowserRouter, Route, Switch} from "react-router-dom";
import {Navbar} from "./components/Navbar";

import theme from "./components/Theme";
import {ThemeProvider} from "@material-ui/styles";
import AdvanceButton from "./components/AdvanceButton";
import RangeSlider from "./components/RangeSlider";

// min and max years available from the API - we use it to init the range slider
let yearRangeAvailable = [1950, 2022];
// the years selected by the user
let selectedYears = [1950, 2022];

// sets the user selected year
function setSelectedYears(years) {
    selectedYears[0] = years[0];
    selectedYears[1] = years[1];
    // TODO: delete logging statement for production
    console.log("selected range = " + selectedYears[0] + " - " + selectedYears[1]);
}



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

                </div>
                <div className="movie-cards">
                    <MoviecardList />
                </div>
            </div>
            <div className="advanced-options-container">
                <RangeSlider minYear={yearRangeAvailable[0]} maxYear={yearRangeAvailable[1]} getSelectedYears={setSelectedYears} />
            </div>
        </div>

        );
}

export default App;