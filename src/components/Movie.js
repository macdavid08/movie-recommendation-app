import "./Movie.css";

const Movie = ({ data }) => {
  console.log(data);
  const imageUrl = "https://image.tmdb.org/t/p/original/";

  return (
    <>
      <div className="movie--cont">
        <img
          src={`${imageUrl}${data.backdrop_path}`}
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
        <div className="overview">
          <h3>Overview</h3>
          <p className="overview--text">{data.overview}</p>
        </div>
      </div>
    </>
  );
};

export default Movie;
