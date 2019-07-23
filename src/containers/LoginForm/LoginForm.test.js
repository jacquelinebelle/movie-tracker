import { LoginForm, mapDispatchToProps, mapStateToProps } from './LoginForm';
import { setLoggedInUser } from '../../actions';
import React from 'react';
import { shallow } from 'enzyme';

describe('LoginFormContainer', () => {
    describe('mapStateToProps', () => {
        it('should', () => {
            const state = {isLoggedIn: true};
            
            const mappedProps = mapStateToProps(state);

            expect(mappedProps).toEqual(state);
        })
    });

    describe('mapDispatchToProps', () => {
        it.skip('should dispatch with a setLoggedInUser action when handleSubmit is called', () => {
            const mockDispatch = jest.fn();
            const mockUser = {name: 'Evan'};
            const mockAction = setLoggedInUser(mockUser);

            const mappedProps = mapDispatchToProps(mockDispatch);
            mappedProps.handleSubmit(mockUser);

            expect(mockDispatch).toHaveBeenCalledWith(mockAction);
        })
    })
    describe('LoginForm', () => {
        let wrapper;
  
        beforeEach(() => {
            wrapper = shallow(<LoginForm />)
        });

        it('should match the snapshot', () => {
            expect(wrapper).toMatchSnapshot()
        });
    });

})




