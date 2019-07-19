export const getFavoritesReducer = (state=[], action) => {
  switch(action.type){
    case 'GET_FAVORITES':
        return action.favorites;
    case 'ADD_FAVORITES':
        return action.favorites;
    default:
      return state
  }
}