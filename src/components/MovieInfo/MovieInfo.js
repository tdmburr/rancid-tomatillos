
import React, { Component } from 'react';
import { fetchSingleMovieDetails } from '../../apiCalls';
import './MovieInfo.css';

class MovieInfo extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }



  render() {
    
    return (
      <section>
        <img src={this.state.poster_path} alt="Movie Poster" />
        <div className="moreInfo">
          <p>{this.state.overview}</p>
          <p>{this.state.average_rating}</p>
          <p>{this.state.genres}</p>
          <p>{this.state.tagline}</p>
          <p>{this.state.overview}</p>
        </div>
      </section>
    );
  }
}

export default MovieInfo;
