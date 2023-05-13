const fetchAllMovies = () => {
    return fetch('https://rancid-tomatillos.herokuapp.com/api/v2/movies')
    .then(response => {
        if(!response.ok) {
          throw new Error("Failed to fetch movies");
      }
      return response.json()
     })
  }
  
  const fetchSingleMovieDetails = (id) => {
    return fetch(`https://rancid-tomatillos.herokuapp.com/api/v2/movies/${id}`)
    .then(response => {
        if(!response.ok) {
          throw new Error("Failed to fetch movies");
      }
      return response.json()
     })
      
  }
  
  export {fetchAllMovies, fetchSingleMovieDetails};

  




