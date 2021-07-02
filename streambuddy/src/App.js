import MoviecardList from "./components/MoviecardList";
import SearchBar from "./components/SearchBar";
import { BrowserRouter, Route, Switch, Link } from "react-router-dom";
import { Navbar } from "./components/Navbar";
import Profile from "./components/Profile";
import theme from "./components/Theme";
import { ThemeProvider } from "@material-ui/styles";
import SearchButton from "./components/SearchButton";
import PersistentDrawerLeft from "./components/newSidebar";

function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <ThemeProvider theme={theme}>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/signup">Signup</Link>
          </li>
          <li>
            <Link to="/login">Login</Link>
          </li>
          <li>
            <Link to="/profile">ThisLinkNeedsToBeInLogin</Link>
          </li>
          <Switch>
            <Route exact path="/" />
            <Route path="/Login" />
            <Route path="/Signup" />
            <Route path="/profile">
              <Profile />
            </Route>
          </Switch>
        </ThemeProvider>
      </div>
    </BrowserRouter>
  );
}

{
  /* <Navbar />
<PersistentDrawerLeft /> */
}

export default App;
