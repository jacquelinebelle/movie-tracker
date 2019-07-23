export const movieDataCleaner = (movies) => {
  return movies.map(movie => {
    return {
      moviePoster: movie.poster_path,
      id: movie.id,
      title: movie.title,
      releaseDate: movie.release_date,
      voteAverage:  movie.vote_average,
      voteCount: movie.vote_count, 
      overview: movie.overview,
      genres: movie.genre_ids,
      favorite: false,
      backdrop: movie.backdrop_path
    }  
  })
}

export default movieDataCleaner