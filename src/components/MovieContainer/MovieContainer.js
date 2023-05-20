import React from 'react'
import Movie from '../Movie/Movie'
import './MovieContainer.css'
import PropTypes from 'prop-types'
import Error from '../Error/Error'

const MovieContainer = ({ movies }) => {

  const movieList = movies.map((movie) => (
    <Movie key={movie.id} movieInfo={movie} />
  ));

  return (
    <div className="parent">
      {movies.length ?
      <section className="movieContainer">{movieList}</section> :
      <Error error="No movies are available based on the current input in the search field. Please check the movie titles and try again."/>} 
    </div>
  )  
};

export default MovieContainer;

MovieContainer.propTypes = {
  movies: PropTypes.array.isRequired,
}