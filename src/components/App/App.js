import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import MovieContainer from '../MovieContainer/MovieContainer';
import MovieInfo from '../MovieInfo/MovieInfo';
import FooterForm from '../FooterForm/FooterForm';
import Header from '../Header/Header';
import acquireInfo from '../../apiCalls';

class App extends Component {
  constructor() {
    super();
    this.state = {
      allMovies: [],
      selectedMovie: [],
      error: '',
      isMovieSlected: false
    };
  }

  clickMovieSelect = (id) => {
    let movies = this.state.allMovies;
    movies = movies.filter((movie) => movie.title.includes(id.title));
    this.setState({ selectedMovie: movies });
  };

  componentDidMount() {
    acquireInfo('movies')
    .then(data =>{
      this.setState({allMovies: data.movies, selectedMovie: data.movies})
    })
    .catch(() => this.setState({error: 'That\'s not a very fungi!'}))
  }
  
  setSelectedMovie = (movies) => {
    this.setState({ selectedMovie: movies });
  };

  render() {
    return (
      <Router>
        <div className="App">
          <Header allMovies={this.state.allMovies} setSelectedMovie={this.setSelectedMovie} />
          <Route path="/movies/:movieId" render={({ match }) => {
            return <MovieInfo clickMovieSelect={this.clickMovieSelect} selectedMovieId={match.params.movieId} />;
          }} />
          <Route exact path="/" render={() => {
            return <MovieContainer movies={this.state.selectedMovie} clickMovieSelect={this.clickMovieSelect} />;
          }} />
          <FooterForm />
        </div>
      </Router>
    );
  }
}

export default App;
