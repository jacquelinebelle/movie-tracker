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
      movies: []
    }
  }
  
  displayMovies = () => {
    return this.props.movies.map(movie =>{
      return  <Link to={`/movies/${movie.id}`}>
      <MovieCard 
      moviePoster={movie.moviePoster} 
      id={movie.id} 
      title={movie.title}
      releaseDate={movie.releaseDate}
      voteAverage={movie.voteAverage}
      overview={movie.overview}
      genres={movie.genres}
      />
      </Link>
    }) 
  }

  
  render() {  
    return (
      <div className="movie-field">{this.displayMovies()}</div>
    )
  }
}

const mapStateToProps = (state) => ({
  movies: state.movies
})

const mapDispatchToProps = (dispatch) => ({
  setMovies: (movies) => dispatch( setMovies(movies) )
})

export default connect(mapStateToProps, mapDispatchToProps)(MovieGallery)