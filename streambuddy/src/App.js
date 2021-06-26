
import MoviecardList from "./components/MoviecardList";
import SearchBar from "./components/SearchBar";
import {BrowserRouter, Route, Switch} from "react-router-dom";
import {Navbar} from "./components/Navbar";

import theme from "./components/Theme";
import {ThemeProvider} from "@material-ui/styles";

import AdvanceButton from "./components/AdvanceButton";


import PersistentDrawerLeft from "./components/newSidebar";



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

              <PersistentDrawerLeft />

          </div>

    );
}

export default App;