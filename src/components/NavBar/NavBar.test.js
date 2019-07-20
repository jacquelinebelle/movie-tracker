import React from 'react';
import NavBar from './NavBar';
import { shallow } from 'enzyme';
import configureStore from 'redux-mock-store';


describe('NavBar', () => {
  let wrapper;
  const initialState = [];
  let store
  const mockStore = configureStore();

  beforeEach(() => {
    store = mockStore(initialState);
    wrapper = shallow(<NavBar store={store}/>)
  })

  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot()
  })
})