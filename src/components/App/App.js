import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import MovieGallery from '../MovieGallery/MovieGallery';
import NavBar from '../NavBar/NavBar';
import SignUpForm from '../../containers/SignUpForm/SignUpForm';
import LoginForm from '../../containers/LoginForm/LoginForm';
import { fetchMovies } from '../../apiCalls';
import { setMovies } from '../../actions';
import { connect } from 'react-redux';
import { movieDataCleaner } from './App.helper'
import MovieDetailPage from '../MovieDetailPage/MovieDetailPage'
import './App.css'


export class App extends Component {
  
  componentDidMount = async () => {
    let movies = await fetchMovies(); 
    let cleanMovies = movieDataCleaner(movies)
    this.props.setMovies(cleanMovies);
  }


  render() {
    const displayMovieDetails = () => {
      return this.props.movies.map((movie, index) => {
        return <Route exact path={`/movies/${movie.id}`} 
        render={() => <MovieDetailPage 
          title={movie.title}
          releaseDate={movie.releaseDate} 
          synopsis={movie.overview}
          rating={movie.voteAverage}
          voteCount={movie.voteCount}
          poster={movie.moviePoster}
          id={movie.id}
          key={index}
          backdrop={movie.backdrop} /> }/>
      })
    }
    return (
      <div className="App">

        <NavBar />
        <Switch>
          <Route exact path='/create-account' render={() => <SignUpForm />} />
          <Route exact path='/login' render={() => <LoginForm />} />
          <Route exact path='/' render={() => <MovieGallery displayFavorites={false} />} />
          {<Route exact path='/favorites' render={() => <MovieGallery displayFavorites={true} />} />}
          {displayMovieDetails()}
        </Switch>
      </div>
    );

  }
  
}

export const mapStateToProps = state => ({
  movies: state.movies,
  favorites: state.favorites
})
export const mapDispatchToProps = (dispatch) => ({
  setMovies: (movies) => dispatch( setMovies(movies) )
})

export default connect(mapStateToProps, mapDispatchToProps)(App)
