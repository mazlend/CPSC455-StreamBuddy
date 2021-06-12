import React from 'react';
import { Navbar } from "./Components/Navbar";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import theme from "./Theme";
import {ThemeProvider} from "@material-ui/styles";
import {createMuiTheme} from "@material-ui/core/styles";


function App() {
  return (
        <ThemeProvider theme={theme}>
          <BrowserRouter>
              <Navbar />
              <Switch>
                  <Route exact path="/" component={() => <div>Home</div>} />
                  <Route path="/Login" component={() => <div>Login</div>} />
                  <Route path="/Signup" component={() => <div>Sign up</div>} />
              </Switch>
          </BrowserRouter>
        </ThemeProvider>
  );
}

export default App;
