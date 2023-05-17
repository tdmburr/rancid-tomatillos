
import React, { Component } from 'react';
import acquireInfo from '../../apiCalls';
import './MovieInfo.css';

class MovieInfo extends Component {
  constructor() {
    super();
    this.state = {
      movie: {},
      error: ''
    };
  }

  componentDidMount() {
    Promise.all([acquireInfo(`movies/${this.props.selectedMovieId}`)])
        .then(data => {
          this.setState({movie: data[0].movie})
        })
        .catch(() => this.setState({error: 'That\'s not a very fungi!'}))
  }

  render() {
    let dollarConversion = new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD'
    });
    let movie = this.state.movie

    return (
      <section>
        <img className="smallImg" src={movie.backdrop_path} alt={movie.title} />
        <div className="moreInfo">
        <p>Title: {movie.title}</p>
        {/* <p>{this.state.backdrop_path}</p> */}
        <p>Release Date: {movie.release_date}</p>
        <p>Overview: {movie.overview}</p>
        <p>Genre: {movie.genres}</p>
        <p>Budget: {dollarConversion.format(movie.budget)}</p>
        <p>Revenue: {dollarConversion.format(movie.revenue)}</p>
        <p>Duration: {movie.runtime}</p>
        <p>Tagline: {movie.tagline}</p>
        <p>Rating: {movie.average_rating}</p>
        </div>
      </section>
    );
  }
}

export default MovieInfo;
