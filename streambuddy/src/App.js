import logo from './logo.svg';
import './App.css';
import Popup from './Popup';

function App() {

  const playMovie=() => {
    console.log("playing movie");
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
          STREAMBUDDY
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <Popup name={"Zootopia"} url={"https://upload.wikimedia.org/wikipedia/en/9/96/Zootopia_%28movie_poster%29.jpg"} handlePlay={playMovie} />
    </div>
  );
}

export default App;
