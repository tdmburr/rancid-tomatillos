import './App.css';
import React, {Component} from 'react'
import movieData from "../../movieMock.js"

class App extends Component {
  constructor() {
    super()
    this.state = {
      movie: movieData
    }
  }

  render() {
    return (
      <main className="App">
        <header className="App-header">
          <h1>Putrid Portabellos</h1>
        </header>
        {/* <MovieContainer /> */}
      </main>
    )
  }
}


export default App;
