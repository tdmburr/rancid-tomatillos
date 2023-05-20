import React, { Component } from 'react'
import { Route } from 'react-router-dom'
import MovieContainer from '../MovieContainer/MovieContainer'
import MovieInfo from '../MovieInfo/MovieInfo'
import FooterForm from '../FooterForm/FooterForm'
import Header from '../Header/Header'
import Error from '../Error/Error'
import acquireInfo from '../../apiCalls'
import './App.css';

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
    .catch(() => this.setState({error: "That's not a very fungi!"}))
  }

  filterMovies = (display) => {
    let title = this.state.allMovies;
    title = title.filter(movie => movie.title.includes(display.title));
    this.setState({selectedMovie: title});
  }


  render() {
    return (
        <main className="App">
          <Header />
          <Route path="/movies/:movieId" render={({ match }) => {
            return <MovieInfo selectedMovieId={match.params.movieId} />
          }} />
          <Route exact path="/Error">
            <Error error= "That's not a very fungi!"/>
          </Route>
          <Route exact path="/">
            <MovieContainer movies={this.state.selectedMovie} />
            <FooterForm filterMovies={this.filterMovies}/>
          </Route>
        </main>
    )
  }
}

export default App
