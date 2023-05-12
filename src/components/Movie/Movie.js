import  "./Movie.css"

const Movie = (props) => {
  console.log(props)
  return (
    <div className="movieCard" id={props.id}>
      <img src={props.movieInfo.poster_path} alt="Neat Movie"></img>
      <h2>{props.movieInfo.title}</h2>
      <span>{props.movieInfo.average_rating}</span>
    </div>
  )
}

export default Movie