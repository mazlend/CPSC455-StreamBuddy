import {BrowserRouter, Redirect, Route, Switch} from "react-router-dom";
import Profile from "./Pages/Profile";
import theme from "./components/Theme";
import {ThemeProvider} from "@material-ui/styles";
import Home from './Pages/Home';
import {Navbar} from "./components/Navbar";
import About from "./Pages/About";
import Login from "./Pages/Login";
import {useState} from "react";
import {UserContext} from "./components/UserContext";
import User from "./components/User";

function App() {
    const [user, setUser] = useState(null);
    const value = {user, setUser};


    let routes;

    if (user) {
        routes = (
            <Switch>
                <Route exact path="/" component={Home}/>
                <Route exact path="/about" component={About}/>
                <Route exact path="/profile" component={Profile} />
                <Route exact path="/login" component={Login}/>
            </Switch>
        );


    } else {
        routes = (
            <Switch>
                <Route exact path="/" component={Home}/>
                <Route exact path="/about" component={About}/>
                <Route exact path="/login" component={Login}/>
                <Redirect to="/login" />
            </Switch>
        );
    }

    return (
        <div className="app">
            <div className="navbar">
                <ThemeProvider theme={theme}>
                    <UserContext.Provider value={value}>
                        <BrowserRouter>
                            <Navbar />
                            <main>{routes}</main>
                        </BrowserRouter>
                    </UserContext.Provider>
                </ThemeProvider>
            </div>
        </div>
    );
}

export default App;