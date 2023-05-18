
import React from 'react';
import Movie from '../Movie/Movie';
import './MovieContainer.css';
import PropTypes from 'prop-types'

const MovieContainer = ({ movies, clickMovieSelect }) => {

  const movieList = movies.map((movie) => (
    <Movie key={movie.id} movieInfo={movie} clickMovieSelect={clickMovieSelect} />
  ));

  return <section className="section">{movieList}</section>;
};

export default MovieContainer;

MovieContainer.propTypes = {
  movies: PropTypes.array.isRequired,
  clickMovieSelect: PropTypes.func.isRequired
}