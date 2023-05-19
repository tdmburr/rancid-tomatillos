import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
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
    };
  }

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
        <main className="App">
          <Header allMovies={this.state.allMovies} setSelectedMovie={this.setSelectedMovie} />
          <Route path="/movies/:movieId" render={({ match }) => {
            return <MovieInfo selectedMovieId={match.params.movieId} />;
          }} />
          <Route exact path="/" render={() => {
            return <MovieContainer movies={this.state.selectedMovie} />;
          }} />
          <FooterForm />
        </main>
    );
  }
}

export default App;
