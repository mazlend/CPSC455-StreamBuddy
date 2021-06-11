import logo from './logo.svg';
import './App.css';
import OLDMoviecard from "./components/OLD-moviecard";
import Moviecard from "./components/moviecard";
import MoviecardList from "./components/MoviecardList";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
          STREAMBUDDY
        </p>
        <MoviecardList />
      </header>
    </div>
  );
}

export default App;
