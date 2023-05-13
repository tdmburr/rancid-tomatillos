import './App.css';
import React, {Component} from 'react'
import MovieContainer from '../MovieContainer/MovieContainer'
import { fetchAllMovies } from '../../apiCalls';
import MovieInfo from '../MovieInfo/MovieInfo';
import FooterForm from '../FooterForm/FooterForm';

class App extends Component {
  constructor() {
    super()
    this.state = {
      allMovies: [],
      selectedMovie : 0,
      error : null
    }
  }

  clickMovieSelect = (id) => {
    this.setState({selectedMovie: id})
    // const selectedMovie = this.state.allMovies.movies.find(movie => movie.id === id)
    // this.setState({selectedMovie})
    // console.log(selectedMovie.id)
  }

  componentDidMount() {
    fetchAllMovies()
    .then(data =>{
      this.setState({allMovies : data.movies})
    })  
  }



  render() {
    return (
      <main className="App">
        <header className="App-header">
          <h1>Putrid Portabellos</h1>
        </header>
        {this.state.selectedMovie ? (
        <MovieInfo clickMovieSelect ={this.clickMovieSelect} selectedMovieId = {this.state.selectedMovie}/>
        ) : (
        <MovieContainer movies = {this.state.allMovies} clickMovieSelect={this.clickMovieSelect}/>)}
        <FooterForm />
      </main>
    )
  }
}


export default App;
