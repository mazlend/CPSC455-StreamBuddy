import logo from './logo.svg';
import './App.css';
import MoviecardList from "./components/MoviecardList";
import SearchBar from "./components/SearchBar";
import {initialmoviesdata} from "./initialmovies";

function App() {

    //Saad: we're passing functions as props, that way we can pass data back to the parent component.
    
    function handleSelectedMovie(movie) {
        console.log("user looks for the movie ", movie);
    }

    function handleSearchedMovie(movie) {
        console.log("user looks for a movie containing something like ", movie);
    }

    // what needs to be done for further processing:
    // let searchedMovies = initialmovies.filter(searchedMovie === movie)
    // update moviecardslist based on searchedmovies
    // I think it would be best to create a state called available movies and theh do
    // do a movies={availableMovies} prop for MoviesList
    // and then have it originally be the initial movies and then later the movies based on the
    // filtering. I'm not sure if the top level component can have a state though.


  return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            <SearchBar 
                updateSelectedMovie={handleSelectedMovie}
                updateSearchedMovie={handleSearchedMovie}
                allMovies={initialmoviesdata} />
          </p>
          <MoviecardList />
        </header>
      </div>
  );
}

export default App;