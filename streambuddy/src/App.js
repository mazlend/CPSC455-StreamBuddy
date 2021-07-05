import { BrowserRouter, Route, Switch, Link } from "react-router-dom";
import Profile from "./components/Pages/Profile";
import theme from "./components/Theme";
import {ThemeProvider} from "@material-ui/styles";
import SearchButton from "./components/SearchButton";
import PersistentDrawerLeft from "./components/newSidebar";
import Home from './components/Pages/Home';
import {Navbar} from "./components/Navbar";
import About from "./components/Pages/About";
import Login from "./components/Pages/Login";

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
                            <Route exact path="/login" component={Login}/>
                            <Route exact path="/profile" component={Profile}/>
                        </Switch>
                    </BrowserRouter>
                </ThemeProvider>
            </div>
          </div>
  // return (
  //   <BrowserRouter>
  //     <div className="app">
  //       <ThemeProvider theme={theme}>
  //         <li>
  //           <Link to="/">Home</Link>
  //         </li>
  //         <li>
  //           <Link to="/signup">Signup</Link>
  //         </li>
  //         <li>
  //           <Link to="/login">Login</Link>
  //         </li>
  //         <li>
  //           <Link to="/profile">ThisLinkNeedsToBeInLogin</Link>
  //         </li>
  //         <Switch>
  //           <Route exact path="/" />
  //           <Route path="/Login" />
  //           <Route path="/Signup" />
  //           <Route path="/profile">
  //           </Route>
  //         </Switch>
  //       </ThemeProvider>
  //     </div>
  //   </BrowserRouter>
  );
}

{
  /* <Navbar />
<PersistentDrawerLeft /> */
}

export default App;