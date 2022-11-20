import { Movie } from "types/movie";

import "./styles.css";

type Props = {
  movie: Movie;
};

const MovieCard = ({ movie }: Props) => {
  return (
    <div className="movie-card">
      <div className="card-top-container">
        <img src={movie.imgUrl} alt={movie.title} />
      </div>
      <div className="card-bottom-container">
        <h1>{movie.title}</h1>
        <h6>{movie.year}</h6>
        <p>{movie.subTitle}</p>
      </div>
    </div>
  );
};

export default MovieCard;
