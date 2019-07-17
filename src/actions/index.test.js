import * as actions from './index';

describe('actions', () => {
  
  it('should have a type of SET_MOVIES', () => {
    const movies = [{title: "Movie"}]

    const expectedAction = {
      type: 'SET_MOVIES',
      movies: movies
    }

    const result = actions.setMovies(movies);

    expect(result).toEqual(expectedAction)
  });

  it('should have a type of SET_LOGGED_IN_USER', () => {
    const user = {name: "Evan"}

    const expectedAction = {
      type: 'SET_LOGGED_IN_USER',
      user: user
    }

    const result = actions.setLoggedInUser(user);

    expect(result).toEqual(expectedAction)
  });

  it('should have a type of SIGN_OUT_USER', () => {
    const user = {name: "Evan"}

    const expectedAction = {
      type: 'SIGN_OUT_USER',
      user: user
    }

    const result = actions.signOutUser(user);

    expect(result).toEqual(expectedAction)
  })


})

