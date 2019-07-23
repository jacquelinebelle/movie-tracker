import React from 'react';
import { NavBar, mapStateToProps, mapDispatchToProps } from './NavBar';
import { shallow } from 'enzyme';
import { signOutUser } from '../../actions'


describe('NavBar', () => {
  let wrapper;

  beforeEach(() => {
    let mockUser = {name: "Jo"}
    let signOutUser = jest.fn()
    wrapper = shallow(<NavBar user={mockUser} signOutUser={signOutUser} />)
  })

  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot()
  })


describe('mapStateToProps', () => {
  let initialState = { user: { name: "Travis" }}
  
  it('should return the state with a user object, or an empty object', () => {
    const mappedProps = mapStateToProps(initialState);
    expect(mappedProps).toEqual(initialState);
    });
  });
    
  describe('mapDispatchToProps', () => {
    let mockUser;
    let wrapper

    beforeEach(()=> {
      mockUser = {name: "Jo", id: 2}
    
      wrapper = shallow(<NavBar user={mockUser} signOutUser={signOutUser}/>)

    })
  
    it('calls dispatch with a signOutUser action when signOutUser is called', () => {
      let mockDispatch = jest.fn();
      let mockAction = signOutUser(mockUser)

      const mappedProps = mapDispatchToProps(mockDispatch);
      mappedProps.signOutUser(mockUser);

      expect(mockDispatch).toHaveBeenCalledWith(mockAction)
    });
  });
});


