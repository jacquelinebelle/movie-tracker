import React from 'react';
import { Switch, Route } from 'react-router-dom';
import MovieGallery from '../MovieGallery/MovieGallery';
import NavBar from '../NavBar/NavBar';
import SignUpForm from '../../containers/SignUpForm/SignUpForm';
import LoginForm from '../../containers/LoginForm/LoginForm';
import './App.css'


function App() {
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

export default App;
