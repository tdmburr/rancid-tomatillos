
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
        <p>{this.state.title}</p>
        <p>{this.state.backdrop_path}</p>
        <p>{this.state.release_date}</p>
        <p>{this.state.overview}</p>
        <p>{this.state.genres}</p>
        <p>{this.state.budget}</p>
        <p>{this.state.revenue}</p>
        <p>{this.state.runtime}</p>
        <p>{this.state.tagline}</p>
        <p>{this.state.average_rating}</p>

        </div>
      </section>
    );
  }
}

export default MovieInfo;



{"movie":{"id":829799,"title":"Paradise City","poster_path":"https://image.tmdb.org/t/p/original//xdmmd437QdjcCls8yCQxrH5YYM4.jpg","backdrop_path":"https://image.tmdb.org/t/p/original//au4HUSWDRadIcl9CqySlw1kJMfo.jpg","release_date":"2022-11-11","overview":"Renegade bounty hunter Ryan Swan must carve his way through the Hawaiian crime world to wreak vengeance on the kingpin who murdered his father.","genres":["Crime","Action","Thriller"],"budget":20000000,"revenue":0,"runtime":93,"tagline":"","average_rating":1}}