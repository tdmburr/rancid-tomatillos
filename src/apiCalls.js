const acquireInfo = (path) => {
    return fetch(`https://rancid-tomatillos.herokuapp.com/api/v2/${path}`)
    .then(response => {
        if(!response.ok) {
          throw new Error("Failed to fetch movies");
      }
      return response.json()
     })
  }
  
  
export default acquireInfo;

  




