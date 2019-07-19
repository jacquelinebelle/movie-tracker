const movieDataCleaner = (movies) => {
  return movies.map(movie => {
    return {
      moviePoster: movie.poster_path,
      id: movie.id,
      title: movie.title,
      releaseDate: movie.release_date,
      voteAverage:  movie.vote_average, 
      overview: movie.overview,
      genres: movie.genre_ids,
      favorited: false,
    }  
  })
}

export default movieDataCleaner