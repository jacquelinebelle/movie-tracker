import React, { Component } from 'react';
import { fetchMovies } from '../../apiCalls';
import { setMovies } from '../../actions';
import { connect } from 'react-redux';
import MovieCard from '../MovieCard/MovieCard';
import {Link } from 'react-router-dom'
import './MovieGallery.css';

class MovieGallery extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movies: [],
      displayFavorites: false
    }
  }
  
  displayMovies = (movies) => {
    return movies.map(movie =>{
      return  <Link to={`/movies/${movie.id}`}>
      <MovieCard 
      moviePoster={movie.moviePoster} 
      id={movie.id} 
      title={movie.title}
      releaseDate={movie.releaseDate}
      voteAverage={movie.voteAverage}
      voteCount={movie.vote_count}
      overview={movie.overview}
      genres={movie.genres}
      favorite={false}
      />
      </Link>
    }) 
  }

  findFavorites = () => {
    const { movies, favorites} = this.props;
    const favoriteObjects = favorites.map(favorite => {
      return movies.find(movie => {
        return movie.title === favorite.title
      })
    });
    return this.displayMovies(favoriteObjects)
  }

  
  render() {  
    return (
      <div className="movie-field">
        {!this.props.displayFavorites && this.displayMovies(this.props.movies)}
        {this.props.displayFavorites && this.findFavorites()}
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  movies: state.movies,
  favorites: state.favorites
})

const mapDispatchToProps = (dispatch) => ({
  setMovies: (movies) => dispatch( setMovies(movies) )
})

export default connect(mapStateToProps, mapDispatchToProps)(MovieGallery)