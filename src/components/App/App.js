import './App.css';
import React, {Component} from 'react'
import MovieContainer from '../MovieContainer/MovieContainer'
import acquireInfo from '../../apiCalls';
import MovieInfo from '../MovieInfo/MovieInfo';
import FooterForm from '../FooterForm/FooterForm';
import { Route } from 'react-router-dom'

class App extends Component {
  constructor() {
    super()
    this.state = {
      allMovies: [],
      selectedMovie: [],
      error: ''
    }
  }

  clickMovieSelect = (id) => {
    let movies = this.state.allMovies
    movies = movies.filter(movie => movie.title.includes(id.title))
    this.setState({selectedMovie: movies})
  }

  componentDidMount() {
    acquireInfo('movies')
    .then(data =>{
      this.setState({allMovies: data.movies, selectedMovie: data.movies})
    })
    .catch(err => this.setState({error: 'Data retrieval network error.'}))  
  }



  render() {
    return (
      <main className="App">
        <header className="App-header">
          <h1>Putrid Portabellos</h1>
        </header>
        <Route path="/movies/:movieId" render={({ match }) => {
          return <MovieInfo clickMovieSelect ={this.clickMovieSelect} selectedMovieId = {match.params.movieId}/>
        }}>  
        </Route>
        <Route exact path="/">
          <MovieContainer movies = {this.state.selectedMovie} clickMovieSelect={this.clickMovieSelect}/>
        </Route>
        <FooterForm />
      </main>
    )
  }
}


export default App;
