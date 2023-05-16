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
    this.setState({selectedMovie: id}) 
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
          <MovieContainer movies = {this.state.allMovies} clickMovieSelect={this.clickMovieSelect}/>
          <FooterForm />
        </Route>
      </main>
    )
  }
}


export default App;
