import { useState, useEffect } from "react";
import DataLoader from "react-spinners/ClipLoader";
import "./App.css";
import './components/Movie.css'
import Movie from "./components/Movie";

function App() {
  const [isLoading, setIsLoading] = useState(false)
  const [search, setSearch]= useState([])
  const movieApi =
    "https://api.themoviedb.org/3/discover/movie?api_key=6e1d4f5e50634c1336f791f577f84406";

    const search_Api = "https://api.themoviedb.org/3/search/movie?&api_key=6e1d4f5e50634c1336f791f577f84406&query="

  const [movieCard, setMovieCard] = useState([]);
  const fetchMovies = () => {
    setIsLoading(true)
     fetch(movieApi)
      .then((res) => res.json())
      .then((data) => {
        
    setIsLoading(false)
        setMovieCard(data.results);
      });
  }
  useEffect(() => {
   fetchMovies()
  }, []);

  if (isLoading) {
    return  <DataLoader
    color="#8d23f0"
    loading={isLoading}
    size={50}
    className="pre-load"
    // aria-label="Loading Spinner"
    // data-testid="loader"
  />
  }

  function getValue (e) {
    const searchValue = e.target.value;
    setSearch(searchValue)
    fetch(search_Api + searchValue)
      .then((res) => res.json())
      .then((data) => {
        
        setMovieCard(data.results);
      });

  }


  console.log()

  return (
    <div className="App">
      <div className="movie--hub">
        <div className="search">
          <input
            type="text"
            placeholder="search for movie"
            className="toSearch"
            onChange={getValue}
            value={search}
          />
          <button className="icon">
            <i className="fa-solid fa-magnifying-glass"></i>
          </button>
        </div>
        <div className="movie--box">
          {movieCard.length === 0 ? (
            <p></p>
          ) : (
            movieCard.map((info) => {
             return <Movie key={info.id} data={info} />;
            })
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
