
import React, { Component } from 'react';
import { fetchSingleMovieDetails } from '../../apiCalls';
import './MovieInfo.css';

class MovieInfo extends Component {
  constructor() {
    super();
    this.state = {};
  }

  componentDidMount() {
    fetchSingleMovieDetails(this.props.selectedMovieId)
        .then(data => this.setState(data.movie))
        .catch()
  }

  render() {
    let dollarConversion = new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD'
    });
    return (
      <section>
        <img src={this.state.poster_path} alt="Movie Poster" />
        <div className="moreInfo">
        <p>Title: {this.state.title}</p>
        {/* <p>{this.state.backdrop_path}</p> */}
        <p>Release Date: {this.state.release_date}</p>
        <p>Overview: {this.state.overview}</p>
        <p>Genre: {this.state.genres}</p>
        <p>Budget: {dollarConversion.format(this.state.budget)}</p>
        <p>Revenue: {dollarConversion.format(this.state.revenue)}</p>
        <p>Duration: {this.state.runtime}</p>
        <p>Tagline: {this.state.tagline}</p>
        <p>Rating: {this.state.average_rating}</p>
        </div>
      </section>
    );
  }
}

export default MovieInfo;
