import { BrowserRouter, Route, Switch, Link } from "react-router-dom";
import Profile from "./Pages/Profile";
import theme from "./components/Theme";
import {ThemeProvider} from "@material-ui/styles";
import Home from './Pages/Home';
import {Navbar} from "./components/Navbar";
import About from "./Pages/About";
import Login from "./Pages/Login";
import React, { useState } from 'react';

function App() {
    const [user, setUser] = useState(null);

    return (
          <div className="app">
            <div className="navbar">
                <ThemeProvider theme={theme}>
                    <BrowserRouter>
                        <Navbar />
                        <Switch>
                            <Route exact path="/" render={() => <Home user={user} updateUser={setUser(user)} />}/>
                            <Route path="/about" render={() => <About user={user} updateUser={setUser(user)} />}/>
                            <Route path="/profile" render={() => <Profile user={user} updateUser={setUser(user)} />}/>
                            <Route path="/login" render={() => <Login user={user} updateUser={setUser(user)} />} />
                        </Switch>
                    </BrowserRouter>
                </ThemeProvider>
            </div>
          </div>
  );
}

export default App;