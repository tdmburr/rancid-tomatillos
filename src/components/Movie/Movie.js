import { Link } from "react-router-dom"
import React from 'react';
import './Movie.css';
import PropTypes from 'prop-types'

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
       <img id={movieInfo.id} src={movieInfo.poster_path} alt={movieInfo.title} />
      <h2 id={movieInfo.id} className="movieTitle">{movieInfo.title}</h2>
      <span id={movieInfo.id}>Rating: {getMushroomRating(movieInfo.average_rating)}({movieInfo.average_rating})</span>
      </div>
    </Link>
  );
};

export default Movie;

Movie.propTypes = {
  movieInfo: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    average_rating: PropTypes.number.isRequired
  })
}