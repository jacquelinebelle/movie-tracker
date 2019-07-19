import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import MovieGallery from '../MovieGallery/MovieGallery';
import NavBar from '../NavBar/NavBar';
import SignUpForm from '../../containers/SignUpForm/SignUpForm';
import LoginForm from '../../containers/LoginForm/LoginForm';
import { fetchMovies } from '../../apiCalls';
import { setMovies } from '../../actions';
import { connect } from 'react-redux';
import movieDataCleaner from './App.helper'
import './App.css'


class App extends Component {
  componentDidMount = async () => {
    let movies = await fetchMovies(); 
    let cleanMovies = movieDataCleaner(movies)
    this.props.setMovies(cleanMovies);
  }



  render() {
    return (
      <div className="App">
        <NavBar />
        <Switch>
          <Route exact path='/create-account' render={() => <SignUpForm />} />
          <Route exact path='/login' render={() => <LoginForm />} />
          <Route exact path='/' render={() => <MovieGallery />} />
        </Switch>
      </div>
    );

  }
  
}

const mapDispatchToProps = (dispatch) => ({
  setMovies: (movies) => dispatch( setMovies(movies) )
})

export default connect(null, mapDispatchToProps)(App)
