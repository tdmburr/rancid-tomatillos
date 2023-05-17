import { Link } from "react-router-dom"
import React from 'react';
import './Movie.css';

const Movie = ({ movieInfo, clickMovieSelect }) => {
  const getMushroomRating = (rating) => {
    const mushrooms = '🍄';
    const mushroomRating = mushrooms.repeat(rating);
    return mushroomRating;
  };

  return (
    <Link to={'movies/' + movieInfo.id}>
      <div
        onClick={() => clickMovieSelect(movieInfo.id)}
        className="movieCard"
        id={movieInfo.id}
      >
        <img id={movieInfo.id} src={movieInfo.poster_path} alt="Neat Movie" />
      <h2 id={movieInfo.id}>{movieInfo.title}</h2>
      <span id={movieInfo.id}>Rating: {getMushroomRating(movieInfo.average_rating)}</span>
      </div>
    </Link>
  );
};

export default Movie;
