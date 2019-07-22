import React from 'react';
import { App, mapStateToProps, mapDispatchToProps } from './App';
import { setMovies } from '../../actions';
import { shallow } from 'enzyme';
import configureStore from 'redux-mock-store';


describe('AppContainer', () => {
  let wrapper, store, initialState, mockStore, mockMovies;

  beforeEach(() => {
    initialState = {
      movies: [
        {title: 'Hat'},
        {title: 'Hat 2'}
      ],
      favorites: [
        {title: 'Hat 2'}
      ]
    };
    mockStore = configureStore();
    store = mockStore(initialState);
    wrapper = shallow(<App store={store} movies={initialState.movies} />)
  });

  
  it('should match snapshots', () => {
    expect(wrapper).toMatchSnapshot()
  })


  it('should return an array of movies and an array of favorite movies', () => {
    const mappedProps = mapStateToProps(initialState);
    expect(mappedProps).toEqual(initialState);
  });

  it('calls dispatch with a setMovies action when setMovies is called', () => {
    const mockDispatch = jest.fn();
    const mockAction = setMovies(initialState.movies);

    const mappedProps = mapDispatchToProps(mockDispatch);
    mappedProps.setMovies(initialState.movies);

    expect(mockDispatch).toHaveBeenCalledWith(mockAction);
  });

});


