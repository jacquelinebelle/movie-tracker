import { SignUpForm, mapDispatchToProps, mapStateToProps } from './SignUpForm';
import { setLoggedInUser } from '../../actions';
import React, {Component} from 'react';
import { shallow } from 'enzyme';
import { fetchStoreProperties } from '../../apiCalls';

jest.mock("../../apiCalls", () => ({
  fetchStoreProperties: jest.fn().mockImplementation(()=> {
    return Promise.resolve({id: 1, name: "fake", emai: "fake", password: "fake"})
  })
 }))

describe('SignUpFormContainer', () => {
    describe('mapStateToProps', () => {
        it('should', () => {
            const state = {isLoggedIn: false};
            
            const mappedProps = mapStateToProps(state);

            expect(mappedProps).toEqual(state);
        })
    });

    describe('mapDispatchToProps', () => {
        it('should dispatch with a setLoggedInUser action when handleSubmit is called', () => {
            const mockDispatch = jest.fn();
            const mockUser = {name: 'Evan'};
            const mockAction = setLoggedInUser(mockUser);

            const mappedProps = mapDispatchToProps(mockDispatch);
            mappedProps.setLoggedInUser(mockUser);

            expect(mockDispatch).toHaveBeenCalledWith(mockAction);
        })
    })
    describe('Match Snapshot', () => {
        let wrapper;
        const isLoggedIn = false;
        beforeEach(() => {
            wrapper = shallow(<SignUpForm isLoggedIn={isLoggedIn}/>)
        })
        it('should match the snapshot', () => {
            expect(wrapper).toMatchSnapshot()
        })
    })
    describe('Update State Based On Inputs', () => {
      let wrapper
      beforeEach (() => {
        wrapper = shallow(<SignUpForm isLoggedIn={false}/>)
      })
      it(' should clear inputs', () => {
        wrapper.setState({name: 'e', email: 'e', password: 'e' })
        wrapper.instance().clearInputs()
        expect(wrapper.state()).toEqual({name: '', email: '', password: '', isLoggedIn: false, error: ''})
      })
      it('should handle change', () => {
        const mockEvent = { target: { name: 'name', value: 'Andy'} };
        const expected = 'Andy';
        wrapper.instance().handleChange(mockEvent);
        expect(wrapper.state('name')).toEqual(expected)
      })
    })
    describe('Handle Submit', () => {
      let wrapper;
      let mockEvent;
      
      beforeEach (() => {
        wrapper = shallow(<SignUpForm isLoggedIn={false}/>)
        mockEvent = jest.fn()
        window.fetch = jest.fn().mockImplementation(() => {
          return Promise.resolve({
            ok: true,
            json: () => Promise.resolve({title: 'e'})
          })
        })
        wrapper.instance().clearInputs = jest.fn();
      })
      it('should call fetchStoreProperties submit is called', () => {
        wrapper.instance().handleSubmit({preventDefault: jest.fn()});
        expect(fetchStoreProperties).toHaveBeenCalled();
      })
      it('should reset state when submit is called', () => {
        wrapper.instance().setState({error: 'test error', isLoggedIn: false})
        wrapper.instance().handleSubmit({preventDefault: jest.fn()});
        wrapper.state({name: '',
        email: '',
        password: '',
        isLoggedIn: true,
        error: ''})

      })
      
    })
}) 