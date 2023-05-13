import './App.css';
import React, {Component} from 'react'
import MovieContainer from '../MovieContainer/MovieContainer'
import movieData from "../../movieMock.js"
import MovieInfo from '../MovieInfo/MovieInfo';

class App extends Component {
  constructor() {
    super()
    this.state = {
      allMovies: movieData,
      selectedMovie : null
    }
  }

  clickMovieSelect = (id) => {
    const selectedMovie = this.state.allMovies.movies.filter(movie => movie.id === id)
    this.setState({allMovies: null, selectedMovie : selectedMovie})
  }

  render() {
    return (
      <main className="App">
        <header className="App-header">
          <h1>Putrid Portabellos</h1>
        </header>
        {this.state.selectedMovie ? <MovieInfo selectMovie ={this.clickMovieSelect}/>:
        <MovieContainer movies = {this.state.allMovies} selectMovie ={this.clickMovieSelect}/>}
      </main>
    )
  }
}


export default App;
