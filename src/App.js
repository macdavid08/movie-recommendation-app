import { useState, useEffect } from "react";
import "./App.css";
import './components/Movie.css'
import Movie from "./components/Movie";

function App() {
  const [isLoading, setIsLoading] = useState(false)
  const movieApi =
    "https://api.themoviedb.org/3/trending/all/day?api_key=6e1d4f5e50634c1336f791f577f84406";

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
    return <p>fetching your movies...</p>
  }

  return (
    <div className="App">
      <div className="movie--hub">
        <div className="search">
          <input
            type="text"
            placeholder="search for movie"
            className="toSearch"
          />
          <button className="icon">
            <i className="fa-solid fa-magnifying-glass"></i>
          </button>
        </div>
        <div className="movie--box">
          {movieCard.length === 0 ? (
            <p>Oops! There're no movies, maybe you should act yours.</p>
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
