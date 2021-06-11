import logo from './logo.svg';
import './App.css';

import MoviecardList from "./components/MoviecardList";
import SearchBar from "./components/SearchBar";
import { BrowserRouter, Route, Switch} from "react-router-dom";
import {Navbar} from "./components/Navbar";




function App() {
  return (
      <div className="App">
          <BrowserRouter>
              <Navbar />
              <Switch>
                  <Route exact path="/" component={() => <div>Home</div>} />
                  <Route path="/Login" component={() => <div>Login</div>} />
                  <Route path="/Signup" component={() => <div>Sign up</div>} />
              </Switch>
          </BrowserRouter>
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />

          <p>
            <SearchBar />
          </p>
          <MoviecardList />
       </header>
      </div>
  );
}

export default App;