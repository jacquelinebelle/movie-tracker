import { SetLoggedInUser } from './SetLoggedInUser';

describe('SetLoggedInUser', () => {
  let mockUser;
  
  beforeEach(() => {
    mockUser = {name: "Evan"}
  })

  it('should set user\'s signed-in status to state', () => {
    const actionObject = {
      type: "SET_LOGGED_IN_USER",
      user: mockUser
    }

    const result = SetLoggedInUser(undefined, actionObject);

    expect(result).toEqual(mockUser)
  });

  it('should set user\'s signed-out status to state', () => {
    const actionObject = {
      type: "SIGN_OUT_USER",
      user: mockUser
    }

    const result = SetLoggedInUser(mockUser, {});

    expect(result).toEqual(mockUser)
  })
})