import React from 'react';
import { NavBar, mapStateToProps, mapDispatchToProps } from './NavBar';
import { shallow } from 'enzyme';
import configureStore from 'redux-mock-store';


describe('NavBar', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<NavBar />)
  })

  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot()
  })
})