import { AxiosRequestConfig } from "axios";
import PrivateRoute from "components/PrivateRoute";
import ReviewCard from "components/ReviewCard";
import { useCallback, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { hasAnyRoles } from "util/auth";
import { requestBackend } from "util/requests";
import Form from "../reviews/Form";

import "./styles.css";

type UrlParams = {
  movieId: string;
};

const MovieDetails = () => {
  const { movieId } = useParams<UrlParams>();

  const [reviews, setReviews] = useState([]);

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
        <h1>{`Tela detalhes do filme id: ${movieId}`}</h1>
        {hasAnyRoles(["ROLE_MEMBER"]) && (
          <Form movieIdStr={movieId} onInsert={getReviews} />
        )}
        <div className="movie-details-container-reviews">
          <ReviewCard reviews={reviews} />
        </div>
      </div>
    </PrivateRoute>
  );
};

export default MovieDetails;
