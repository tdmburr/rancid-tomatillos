import React from "react"
import Movie from "../Movie/Movie"
import "./MovieContainer.css"

const MovieContainer = ({movies}) => {
  const movieData = movies
  const movie = movieData.movies.map(movie => {
    return (
      <Movie key={movie.id} movieInfo={movie}/>
    )
  })

  return (
    <section>
      {movie}
    </section>
  )
}

export default MovieContainer
