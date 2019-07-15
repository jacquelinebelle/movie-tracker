import React, { Component } from 'react';
import { fetchMovies } from '../../apiCalls';
import { setMovies } from '../../actions';
import { connect } from 'react-redux';

class MovieGallery extends Component {
  constructor() {
    super();
    this.state = {
      movies: []
    }
  }

  componentDidMount = async () => {
    let movies = await fetchMovies(); 
    setMovies(movies);
    this.setState({movies})
  } 
  
  render() {
    return (
      <div>Hello</div>
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