import React from "react"
import  "./Movie.css"

const Movie = ({movieInfo, clickMovieSelect}) => {
  // console.log(clickMovieSelect)
  return (
    <div onClick={() => clickMovieSelect(movieInfo.id)} className="movieCard" id={movieInfo.id}>
      <img src={movieInfo.poster_path} alt="Neat Movie"></img>
      <h2>{movieInfo.title}</h2>
      <span>Average Ratings: {movieInfo.average_rating.toFixed(1)}</span>
    </div>
  )
}

export default Movie