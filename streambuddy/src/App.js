import logo from './logo.svg';
import './App.css';
import Moviecard from "./components/moviecard";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
          STREAMBUDDY
        </p>
        <Moviecard />

      </header>
    </div>
  );
}

export default App;
