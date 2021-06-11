import logo from './logo.svg';
import './App.css';

import MoviecardList from "./components/MoviecardList";
import SearchBar from "./components/SearchBar";

function App() {
  return (
      <div className="App">
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