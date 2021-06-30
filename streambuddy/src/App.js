import {BrowserRouter, Route, Switch} from "react-router-dom";
import {Navbar} from "./components/Navbar";
import theme from "./components/Theme";
import {ThemeProvider} from "@material-ui/styles";
import PersistentDrawerLeft from "./components/newSidebar";
import Home from './components/Pages/Home';



function App() {
    return (
          <div className="app">
            
            <div className="navbar">
                <ThemeProvider theme={theme}>
                    <BrowserRouter>
                        <Navbar />
                        <Switch>
                            <Route exact path="/" component={Home}/>
                            <Route exact path="/about" component={() => <div>About</div>}/>
                            <Route exact path="/login" component={() => <div>Login | Register</div>}/>
                        </Switch>
                    </BrowserRouter>
                </ThemeProvider>
            </div>

          </div>

    );
}

export default App;