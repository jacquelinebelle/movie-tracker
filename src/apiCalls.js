export const fetchMovies = async () => {
  try {
    const response = await fetch('https://api.themoviedb.org/3/movie/now_playing?api_key=b6a9c244f525ef1a2fe0110d010ba4aa&language=en-US&include_adult=false&page=1')
    if(!response.ok){
      throw new Error('Error fetching movies')
    } 
    const movies = await response.json()
    return movies.results
  }
  catch(error){
    throw new Error(error.message)
  }
}

