import React, { Component } from 'react';
import { fetchMovies } from '../../apiCalls';
import { setMovies } from '../../actions';
import { connect } from 'react-redux';
import MovieCard from '../MovieCard/MovieCard';
import './MovieGallery.css';

class MovieGallery extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movies: []
    }
  }

  componentDidMount = async () => {
    let movies = await fetchMovies(); 
    this.props.setMovies(movies);
  } 

  displayMovies = this.props.movies.map(movie =>{
    return <MovieCard moviePoster={movie.poster_path}/>
  })

  render() {
  
    return (
      <div className="movie-field">{this.displayMovies}</div>
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