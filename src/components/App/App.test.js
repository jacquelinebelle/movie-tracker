import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { App, mapStateToProps, mapDispatchToProps } from './App';
import { setMovies } from '../../actions';
import { movieDataCleaner } from './App.helper'
import { shallow } from 'enzyme';


describe('AppContainer', () => {
  let wrapper, initialState;

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
    wrapper = shallow(<App initialState={initialState} movies={initialState.movies} />)
  });

  
  it('should match snapshots', () => {
    expect(wrapper).toMatchSnapshot()
  });

  it('should reorganize movie objects when pushed through movieDataCleaner', () => {
    const uncleanMovies = [
      {
        backdrop_path: "/1TUg5pO1VZ4B0Q1amk3OlXvlpXV.jpg",
        genre_ids: [12, 16, 10751, 18, 28],
        id: 420818,
        overview: "Simba goes apeshit",
        poster_path: "/dzBtMocZuJbjLOXvrl4zGYigDzh.jpg",
        release_date: "2019-07-12",
        title: "The Lion King",
        vote_average: 7.1,
        vote_count: 617
      }
    ];

    const expected = [
      {
        backdrop: "/1TUg5pO1VZ4B0Q1amk3OlXvlpXV.jpg",
        favorite: false,
        genres: [
          12,
          16,
          10751,
          18,
          28,
        ],
        id: 420818,
        moviePoster: "/dzBtMocZuJbjLOXvrl4zGYigDzh.jpg",
        overview: "Simba goes apeshit",
        releaseDate: "2019-07-12",
        title: "The Lion King",
        voteAverage: 7.1,
        voteCount: 617
      }
    ]

    const result = movieDataCleaner(uncleanMovies);
    
    expect(result).toEqual(expected);
  });

});

describe('mapStateToProps', () => {
    let initialState = {
      movies: [
        {title: 'Hat'},
        {title: 'Hat 2'}
      ],
      
      favorites: [
        {title: 'Hat 2'}
      ]
    };

    let wrapper = shallow(<App initialState={initialState} movies={initialState.movies} />)

  it('should return an array of movies and an array of favorite movies', () => {
    const mappedProps = mapStateToProps(initialState);
    expect(mappedProps).toEqual(initialState);
  });

});

describe('mapDispatchToProps', () => {
  let initialState = {
    movies: [
      {title: 'Hat'},
      {title: 'Hat 2'}
    ],
    
    favorites: [
      {title: 'Hat 2'}
    ]
  };
  
  let wrapper = shallow(<App initialState={initialState} movies={initialState.movies} />)

  it('calls dispatch with a setMovies action when setMovies is called', () => {
    const mockDispatch = jest.fn();
    const mockAction = setMovies(initialState.movies);

    const mappedProps = mapDispatchToProps(mockDispatch);
    mappedProps.setMovies(initialState.movies);

    expect(mockDispatch).toHaveBeenCalledWith(mockAction);
  });

});


