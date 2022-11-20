import { AxiosRequestConfig } from "axios";
import ButtonIcon from "components/ButtonIcon";
import PrivateRoute from "components/PrivateRoute";
import ReviewCard from "components/ReviewCard";
import { useCallback, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { Movie } from "types/movie";
import { hasAnyRoles } from "util/auth";
import { requestBackend } from "util/requests";
import Form from "../reviews/Form";

import "./styles.css";

type UrlParams = {
  movieId: string;
};

const MovieDetails = () => {
  const { movieId } = useParams<UrlParams>();

  const [movie, setMovie] = useState<Movie>();

  const [reviews, setReviews] = useState([]);

  const getMovie = useCallback(() => {
    const params: AxiosRequestConfig = {
      method: "GET",
      url: `/movies/${movieId}`,
      withCredentials: true,
    };

    requestBackend(params).then((response) => {
      console.log(response.data);
      setMovie(response.data);
    });
  }, [movieId]);

  useEffect(() => {
    getMovie();
  }, [getMovie]);

  const getReviews = useCallback(() => {
    const params: AxiosRequestConfig = {
      method: "GET",
      url: `/movies/${movieId}/reviews`,
      withCredentials: true,
    };

    requestBackend(params).then((response) => {
      setReviews(response.data);
    });
  }, [movieId]);

  useEffect(() => {
    getReviews();
  }, [getReviews]);

  return (
    <PrivateRoute path="/movies/:movieId">
      <div className="movie-details-container">
        <div className="movie-details-card">
          <div className="movie-details-top-card">
            <img src={movie?.imgUrl} alt={movie?.title} />
          </div>

          <div className="movie-details-bottom-card">
            <h1>{movie?.title}</h1>
            <h6>{movie?.year}</h6>
            <p className="movie-subTitle">{movie?.subTitle}</p>
            <div className="movie-synopsis-container">
              <p className="movie-synopsis">{movie?.synopsis}</p>
            </div>
          </div>
        </div>

        {hasAnyRoles(["ROLE_MEMBER"]) && (
          <div className="movie-details-form-reviews-container">
            <Form movieIdStr={movieId} onInsert={getReviews} />
          </div>
        )}

        {reviews.length > 0 && (
          <div className="movie-details-reviews-container">
            <ReviewCard reviews={reviews} />
          </div>
        )}

        <div>
        <Link to="/movies">
          <div className="goback-container">
             <ButtonIcon text="Voltar" />
          </div>
        </Link>
        </div>
      </div>
    </PrivateRoute>
  );
};

export default MovieDetails;
