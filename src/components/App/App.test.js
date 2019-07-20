import React from 'react';
// import ReactDOM from 'react-dom';
import App from './App';
import { shallow } from 'enzyme';
// import { Provider } from 'react-redux';
// import { createStore } from 'redux';
// import { store } from '../../index.js'
// import { connect } from 'react-redux';
import configureStore from 'redux-mock-store';


describe('App', () => {
  let wrapper;
  const initialState = [];
  let store
  const mockStore = configureStore();

  beforeEach(() => {
    store = mockStore(initialState);
    wrapper = shallow(<App store={store}/>)
  })

  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot()
  })
})
