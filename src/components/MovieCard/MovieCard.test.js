import React from 'react';
import { shallow } from 'enzyme';
import { MovieCard, mapStateToProps, mapDispatchToProps } from './MovieCard';
import { getFavorites } from '../../actions';

describe('MovieCard', () => {
  describe('MovieCard', () => {
    let wrapper, mockUser, mockMovies, mockFavorites;

    beforeEach(() => {
      mockUser = {id: 2};
      mockMovies = [
        {title: 'Hat'},
        {title: 'Hat 2'}
      ];
      mockFavorites = [
        {title: 'Hat 2'}
      ];

      wrapper = shallow(<MovieCard user={mockUser} movies={mockMovies} favorites={mockFavorites} />)
    })
  
    it('should match the snapshot', () => {
      expect(wrapper).toMatchSnapshot()
    })

    it('fetches with the right URL and calls getFavorites when toggleFavorite is called', async () => {
      wrapper.instance().getFavorites = jest.fn();
      let mockUrl = 'http://localhost:3000/api/users/2/favorites';
      let mockMovie =  { title: "Hat" };
      
      window.fetch = jest.fn().mockImplementation(() => {
        return Promise.resolve({
          ok: true,
          json: () => Promise.resolve(mockMovie)
        })
      });

      await wrapper.instance().toggleFavorite();
      expect(window.fetch).toHaveBeenCalledWith(mockUrl);

      await wrapper.instance().toggleFavorite();
      await expect(wrapper.instance().getFavorites).toHaveBeenCalled();
    })

    it('should reset state to redirect:true, if there is no user name selected when the favorite button is clicked', () => {
      let nonUser = {}
      wrapper = shallow(<MovieCard user={nonUser} movies={mockMovies} favorites={mockFavorites} />)
      console.log(wrapper.state())
      wrapper.find('.star').simulate('click')

      expect(wrapper.state('redirect')).toEqual(true);
    })

    it.skip('should call toggleFavorite if a user is selected and add a movie to the favorites array', () => {
      const mockUser = { name: "NIMSUM"}
      let wrapper = shallow(<MovieCard user={mockUser} initialState={initialState} favorites={[{title: 'Hat 2'}]} movies={initialState.movies}/>)
      
      jest.spyOn(wrapper.instance(), 'toggleFavorite');
      // const result = wrapper.instance().toggleFavorite()

      wrapper.find('button').simulate('click')

      expect(wrapper.instance().toggleFavorite).toHaveBeenCalled();
    })

    it.skip('should call toggleFavorite if a user is selected and remove a movie from the favorites array', () => {
      const mockUser = { name: "NIMSUM"}
      let wrapper = shallow(<MovieCard user={mockUser} initialState={initialState} title="Hat 2" favorites={[{title: 'Hat 2'}]} movies={initialState.movies}/>)
      
      jest.spyOn(wrapper.instance(), 'toggleFavorite');

      wrapper.find('button').simulate('click')

      expect(wrapper.instance().toggleFavorite).toHaveBeenCalled();
    })
  })

  describe('mapStateToProps', () => {
    let initialState = {
      user: "User",
      movies: [
        {title: 'Hat'},
        {title: 'Hat 2'}
      ],
      
      favorites: [
        {title: 'Hat 2'}
      ]
    };
  
    it('should return a user, an array of movies and an array of favorite movies', () => {
      const mappedProps = mapStateToProps(initialState);
      expect(mappedProps).toEqual(initialState);
    });
  });

  describe('mapDispatchToProps', () => {
    let initialState = {
      user: "User",
      movies: [
        {title: 'Hat'},
        {title: 'Hat 2'}
      ],
      
        favorites: [
          {title: 'Hat 2'}
        ]
      };
    
      it('calls dispatch with a getFavorites action when getFavorites is called', () => {
        const mockDispatch = jest.fn();
        const mockAction = getFavorites(initialState.movies);
    
        const mappedProps = mapDispatchToProps(mockDispatch);
        mappedProps.getFavorites(initialState.movies);
    
        expect(mockDispatch).toHaveBeenCalledWith(mockAction);
      });
    });

})