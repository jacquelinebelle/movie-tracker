export const fetchMovies = async () => {
  try {
    const response = await fetch('http://api.themoviedb.org/3/movie/now_playing?api_key=b6a9c244f525ef1a2fe0110d010ba4aa&language=en-US&include_adult=false&page=1')
    if (!response.ok) {
      throw new Error('Error fetching movies')
    }
    const movies = await response.json()
    return movies.results
  }
  catch (error) {
    throw new Error(error.message)
  } 
}

export const fetchObject = async (url, movieObject, method, error) => {
  try {
    const options = {
      method: method,
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(movieObject)
    }
    const response = await fetch(url, options)
    if (!response.ok) {
      throw new Error(error)
    }
    const user = await response.json()
    return user;
  }
  catch (error) {
    throw new Error(error.message)
  }
}

// export const fetchNewUser = async (url, newUser, error) => {
//   try {
//     const options = {
//       method: 'POST',
//       headers: { 'Content-Type': 'application/json' },
//       body: JSON.stringify(newUser)
//     }
//     const response = await fetch(url, options)
//     if (!response.ok) {
//       console.log(response)
//       throw new Error('User already added')
//     }
//     const user = await response.json()
//     return user;
//   }
//   catch (error) {
//     throw new Error(error.message)
//   }
// }

// export const userLogin = async (url, newUser) => {
//   try {
//     const options = {
//       method: 'POST',
//       headers: { 'Content-Type': 'application/json' },
//       body: JSON.stringify(newUser)
//     }
//     const response = await fetch(url, options)
//     if (!response.ok) {
//       throw new Error('Incorrect Password')
//     }
//     const user = await response.json()
//     return user;
//   }
//   catch (error) {
//     throw new Error(error.message)
//   }
// }
