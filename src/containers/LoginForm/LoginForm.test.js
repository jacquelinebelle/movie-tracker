import { LoginForm, mapDispatchToProps, mapStateToProps } from './LoginForm';
import { setLoggedInUser, getFavorites } from '../../actions';
import React from 'react';
import { mount } from 'enzyme';

describe('LoginFormContainer', () => {
    describe('mapStateToProps', () => {
        it('should', () => {
            const state = {isLoggedIn: true};
            
            const mappedProps = mapStateToProps(state);

            expect(mappedProps).toEqual(state);
        })
    });

    describe('mapDispatchToProps', () => {
        it('should dispatch with a setLoggedInUser action when handleSubmit is called', () => {
            const mockDispatch = jest.fn();
            const mockUser = {name: 'Evan'};
            const firstMockAction = setLoggedInUser(mockUser);
            const secondMockAction = getFavorites(1);
            const mappedProps = mapDispatchToProps(mockDispatch);

            mappedProps.setLoggedInUser(mockUser);
            expect(mockDispatch).toHaveBeenCalledWith(firstMockAction);

            mappedProps.getFavorites(1);
            expect(mockDispatch).toHaveBeenCalledWith(secondMockAction);
        })
    });

    describe('LoginForm', () => {
        let wrapper;
  
        beforeEach(() => {
            wrapper = mount(<LoginForm />)
        });

        it('should match the snapshot', () => {
            expect(wrapper).toMatchSnapshot()
        });

        it.skip('should update state when user types in inputs', () => {
            // wrapper.find('.email-input').simulate('change', {
            //     target: { value: 'evan@evan.com' }
            // });

            // const emailInput = wrapper.find(".email-input")
            // emailInput.instance().value = "evan@evan.com"
            // emailInput.simulate('change');

            // expect(wrapper.state('email')).toEqual('evan@evan.com');
        });

        it.skip('should call logInUser and clearInputs when handleSubmit is called', async () => {
            const mockEvent = { preventDefault: jest.fn() };

            wrapper.instance().clearInputs = jest.fn();
            wrapper.instance().logInUser = jest.fn();

            wrapper.find('button').simulate('click');
            
            // expect(wrapper.instance().handleSubmit).toBeCalledWith(mockEvent)
            expect(wrapper.instance().clearInputs).toHaveBeenCalled();
        });
    });

})




