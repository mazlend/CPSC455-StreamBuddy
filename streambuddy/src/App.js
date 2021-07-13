import { BrowserRouter, Route, Switch, Link } from "react-router-dom";
import Profile from "./Pages/Profile";
import theme from "./components/Theme";
import {ThemeProvider} from "@material-ui/styles";
import Home from './Pages/Home';
import {Navbar} from "./components/Navbar";
import About from "./Pages/About";
import Login from "./Pages/Login";

function App() {
    return (
          <div className="app">
            <div className="navbar">
                <ThemeProvider theme={theme}>
                    <BrowserRouter>
                        <Navbar />
                        <Switch>
                            <Route exact path="/" component={Home}/>
                            <Route exact path="/about" component={About}/>
                            <Route exact path="/profile" component={Profile}/>
                            <Route exact path="/login" component={Login}/>
                        </Switch>
                    </BrowserRouter>
                </ThemeProvider>
            </div>
          </div>
  );
}

export default App;