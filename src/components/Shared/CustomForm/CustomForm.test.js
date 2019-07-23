import React from 'react';
import CustomForm from './index.js';
import { shallow } from 'enzyme';


describe('CustomForm', () => {
  let wrapper;
  let formFields;
  let error;

  beforeEach(() => {
    formFields = ['a', 'b', 'c']
    error = {
      message: 'error'
    }
    wrapper = shallow(<CustomForm formFields={formFields} error={error}/>)
  })

  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot()
  })
})