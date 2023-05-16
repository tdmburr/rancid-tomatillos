import { Link } from "react-router-dom"
import React from 'react';
import './Movie.css';

const Movie = ({ movieInfo, clickMovieSelect }) => {
  return (
    // <Link to={'movies/' + movieInfo.id}>
      <div
        onClick={() => clickMovieSelect(movieInfo.id)}
        className="movieCard"
        id={movieInfo.id}
      >
        <img id={movieInfo.id} src={movieInfo.poster_path} alt="Neat Movie" />
        <h2 id={movieInfo.id} >{movieInfo.title}</h2>
        <span id={movieInfo.id} >Average Ratings: {movieInfo.average_rating.toFixed(1)}</span>
      </div>
    // </Link>
  );
};

export default Movie;
