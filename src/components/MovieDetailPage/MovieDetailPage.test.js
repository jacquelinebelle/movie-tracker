import React from 'react';
import { MovieDetailPage, mapStateToProps } from './MovieDetailPage';
import { shallow } from 'enzyme';

describe('MovieDetailPage', () => {
  describe('MovieDetail Snapshot', () => { 
    let wrapper;
    const movies= [
      {title: 'Hat'},
      {title: 'Hat 2'}
    ]
  
    beforeEach(() => {
      wrapper = shallow(<MovieDetailPage title={'title'}/>)
    })

    it('should match the snapshot', () => {
      expect(wrapper).toMatchSnapshot()
    })
  })

  describe('Map state to props', () => {
    let initialState = {
      movies: [
        {title: 'Hat'},
        {title: 'Hat 2'}
      ],
    };
  
    let wrapper = shallow(<MovieDetailPage initialState={initialState} />)
    it('should return an array of movies and an array of favorite movies', () => {
      const mappedProps = mapStateToProps(initialState);
      expect(mappedProps).toEqual(initialState);
    });
  })
})