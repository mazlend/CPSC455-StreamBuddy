import { BrowserRouter, Route, Switch } from "react-router-dom";
import Profile from "./Pages/Profile";
import theme from "./components/Theme";
import {ThemeProvider} from "@material-ui/styles";
import Home from './Pages/Home';
import {Navbar} from "./components/Navbar";
import About from "./Pages/About";
import Login from "./Pages/Login";
import {useState} from "react";



function App() {

    const [user, setUser] = useState(null);
    // const login = <Login user={user} setUser={setUser}/>
    // console.log("this is app user: " + user);


    return (
          <div className="app">
            <div className="navbar">
                <ThemeProvider theme={theme}>
                    <BrowserRouter>
                        <Navbar />
                        <Switch>
                            <Route exact path="/" component={Home}/>
                            <Route exact path="/about" component={About}/>
                            <Route exact path="/login" component= {() => <Login user={user} setUser={setUser}/>}/>
                            <Route exact path="/profile" component={Profile}/>
                        </Switch>
                    </BrowserRouter>
                </ThemeProvider>
            </div>
          </div>
  );
}

export default App;