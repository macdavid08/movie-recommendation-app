import { useState } from "react";
import "./Movie.css";

const Movie = ({ data }) => {
  // console.log(data);
  const value = data.adult
  const [show, setShow] = useState(value)
  // console.log(show)
  
  const styles = {
    display: !show ? "none" : "block"
  }
  // console.log(styles)

  function toggle (){
   setShow(prevShow=> !prevShow)
  }

  const imageUrl = "https://image.tmdb.org/t/p/original/";

  return (
    <>
      <div className="movie--cont" onClick={toggle}>
        <img
          src={`${imageUrl}${data.backdrop_path || data.poster_path
          }`}
          alt={data.title || data.name}
          className="movie__image"
        />
        <div className="movieTitle">
          <h3 className="title">{data.title || data.name}</h3>
          <div className="star--rating">
            <span className="rating--star">
              <i class="fa-solid fa-star"></i>
            </span>
            <span className="rating--text">
              {Math.floor(data.vote_average)}
            </span>
          </div>
        </div>
        <div className="overview" style={styles}>
          <h3>Overview</h3>
          <p className="overview--text">{data.overview}</p>
          <div className="overview--others">
            <span> Popularity: ({Math.floor(data.popularity)})</span>
            <span>Date: {data.release_date}</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Movie;
