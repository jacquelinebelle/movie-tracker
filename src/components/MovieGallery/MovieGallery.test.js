import React from 'react';
import MovieGallery from './MovieGallery';
import { shallow } from 'enzyme';
import configureStore from 'redux-mock-store';


describe('MovieGallery', () => {
  let wrapper;
  const initialState = [];
  let store
  const mockStore = configureStore();

  beforeEach(() => {
    store = mockStore(initialState);
    wrapper = shallow(<MovieGallery store={store}/>)
  })

  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot()
  })
})