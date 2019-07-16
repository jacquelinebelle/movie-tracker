export const SetLoggedInUser = (state = {}, action) => {
  switch (action.type) {
    case 'SET_LOGGED_IN_USER':
      return action.user;
    case 'SIGN_OUT_USER':
      return action.user;
    default:
      return state;
  }
}

