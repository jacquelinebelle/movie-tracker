import React from 'react';
import MovieDetailPage from './MovieDetailPage';
import { shallow } from 'enzyme';
import configureStore from 'redux-mock-store';


describe('MovieDetailPage', () => {
  let wrapper;
  const initialState = [];
  let store
  const mockStore = configureStore();

  beforeEach(() => {
    store = mockStore(initialState);
    wrapper = shallow(<MovieDetailPage store={store}/>)
  })

  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot()
  })
})