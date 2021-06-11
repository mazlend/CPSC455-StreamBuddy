import logo from './logo.svg';
import './App.css';
import DummyCard from './components/DummyCard';

function App() {

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
      <DummyCard title={"Zootopia"} url={"https://upload.wikimedia.org/wikipedia/en/9/96/Zootopia_%28movie_poster%29.jpg"} genre={'Animation'} year={'2019'}/>
    </div>
  );
}

export default App;
