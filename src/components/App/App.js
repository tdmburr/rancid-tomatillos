import './App.css';
import React, {Component} from 'react'
import MovieContainer from '../MovieContainer/MovieContainer'
import movieData from "../../movieMock.js"
import MovieInfo from '../MovieInfo/MovieInfo';

class App extends Component {
  constructor() {
    super()
    this.state = {
      allMovies: movieData
    }
  }

  render() {
    return (
      <main className="App">
        <header className="App-header">
          <h1>Putrid Portabellos</h1>
        </header>
        <MovieContainer movies = {this.state.allMovies}/>
      </main>
    )
  }
}


export default App;
