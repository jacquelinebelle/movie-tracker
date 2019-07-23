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
        let wrapper, mockUser, mockFavorites;
  
        beforeEach(() => {
            mockUser = {
            email: "evan@evan.com",
            id: 1,
            name: "Evan Evan",
            password: "evan" };

            mockFavorites = [
                {title: 'Hat'}
            ];

            wrapper = mount(<LoginForm />)
        });

        it('should match the snapshot', () => {
            expect(wrapper).toMatchSnapshot()
        });

        it('should update state when user types in inputs', () => {
            const mockEvent = { target: { name: 'email', value: 'evan@evan.com'}}
            const expected = 'evan@evan.com'

            wrapper.instance().handleChange(mockEvent)

            expect(wrapper.state('email')).toEqual(expected);
        });

        it('should call logInUser and clearInputs when handleSubmit is called', async () => {
            wrapper.instance().clearInputs = jest.fn();
            wrapper.instance().logInUser = jest.fn();

            wrapper.find('button').simulate('click');
            expect(wrapper.instance().logInUser).toHaveBeenCalled();

            await wrapper.find('button').simulate('click');
            expect(wrapper.instance().clearInputs).toHaveBeenCalled();
        });

        it('should log in a user', async () => {
            wrapper.setState({ 'email': 'evan@evan.com', 'password': 'evan' })

            wrapper.instance().setLoggedInUser = jest.fn();

            await wrapper.instance().logInUser();
            await expect(wrapper.instance().setLoggedInUser).toHaveBeenCalled();
        });

        it.skip('should fetch favorites and set them to state', async () => {
            window.fetch = jest.fn().mockImplementation(() => {
                return Promise.resolve({
                  ok: true,
                  json: () => Promise.resolve(mockFavorites)
                });
              });
              
            await getFavorites(window.fetch());

            expect(wrapper.state('favorites')).toEqual(mockFavorites);
        })

        it('should set error to state', () => {
            const mockError = 'Error fetching favorites.';
            wrapper.instance().fetchUserFavorites();

            expect(wrapper.state('error')).toEqual(mockError);
        })

        it('should remove email and password info from state upon calling clearInputs', () => {
            wrapper.state({ email: 'evan@evan.com', password: 'evan'})
            wrapper.instance().clearInputs();

            expect(wrapper.state('email', 'password')).toEqual('');
        });
    });

})






