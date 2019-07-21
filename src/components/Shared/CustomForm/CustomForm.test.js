import React from 'react';
import CustomForm from './index.js';
import { shallow, mount } from 'enzyme';
// import configureStore from 'redux-mock-store';


describe('CustomForm', () => {
  let wrapper;
  // const initialState = [];
  // let store
  // const mockStore = configureStore();
  let formFields;
  let error;

  beforeEach(() => {
    // store = mockStore(initialState);
    formFields = ['a', 'b', 'c']
    error = {
      message: 'error'
    }
    wrapper = mount(<CustomForm formFields={formFields} error={error}/>)
  })

  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot()
  })
})