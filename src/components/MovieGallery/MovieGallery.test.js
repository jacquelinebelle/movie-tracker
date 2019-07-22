import React from 'react';
import { MovieGallery, mapDispatchToProps, mapStateToProps } from './MovieGallery';
import { setMovies } from '../../actions';
import { shallow } from 'enzyme';

describe('MovieGallery', () => {
  let wrapper, mockMovies, mockFavorites;

  beforeEach(() => {
    mockMovies = [
      {title: 'Hat'},
      {title: 'Hat 2'}
    ];
    mockFavorites = [
      {title: 'Hat 2'}
    ];
    wrapper = shallow(<MovieGallery movies={mockMovies} />)
  })

  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot();

    wrapper = shallow(<MovieGallery movies={mockMovies} favorites={mockFavorites} />);

    expect(wrapper).toMatchSnapshot();
  })

  it('should call displayMovies when findFavorites is called', () => {
    wrapper = shallow(<MovieGallery movies={mockMovies} favorites={mockFavorites} />);
    
    wrapper.instance().displayMovies = jest.fn();
    wrapper.instance().findFavorites();
    
    expect(wrapper.instance().displayMovies).toHaveBeenCalled();
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

  let wrapper = shallow(<MovieGallery initialState={initialState} movies={initialState.movies} />)

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

  let wrapper = shallow(<MovieGallery initialState={initialState} movies={initialState.movies} />)

  it('calls dispatch with a setMovies action when setMovies is called', () => {
    const mockDispatch = jest.fn();
    const mockAction = setMovies(initialState.movies);

    const mappedProps = mapDispatchToProps(mockDispatch);
    mappedProps.setMovies(initialState.movies);

    expect(mockDispatch).toHaveBeenCalledWith(mockAction);
  });

});