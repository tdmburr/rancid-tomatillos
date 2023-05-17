
import React from 'react';
import Movie from '../Movie/Movie';
import './MovieContainer.css';

const MovieContainer = ({ movies, clickMovieSelect }) => {

  const movieList = movies.map((movie) => (
    <Movie key={movie.id} movieInfo={movie} clickMovieSelect={clickMovieSelect} />
  ));

  return <section className="section">{movieList}</section>;
};

export default MovieContainer;