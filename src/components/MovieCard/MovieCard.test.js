import React from 'react';
import MovieCard from './MovieCard';
import { shallow } from 'enzyme';
import configureStore from 'redux-mock-store';


describe('MovieCard', () => {
  let wrapper;
  const initialState = [];
  let store
  const mockStore = configureStore();

  beforeEach(() => {
    store = mockStore(initialState);
    wrapper = shallow(<MovieCard store={store}/>)
  })

  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot()
  })
})