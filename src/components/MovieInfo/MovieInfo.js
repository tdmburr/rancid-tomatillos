
import React, { Component } from 'react';
import testDetails from '../MovieInfo/mockMovieView';
import './MovieInfo.css';

class MovieInfo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movie: testDetails.movie
    };
  }

  render() {
    const { movie } = this.state;

    return (
      <section>
        <img src={movie.poster_path} alt="Movie Poster" />
        <div className="moreInfo">
          <p>{movie.overview}</p>
          <p>{movie.average_rating}</p>
          <p>{movie.genres[0]}</p>
          <p>{movie.tagline}</p>
          <p>{movie.overview}</p>
        </div>
      </section>
    );
  }
}

export default MovieInfo;
