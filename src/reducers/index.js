import { combineReducers } from 'redux';
import { GetMoviesReducer } from './GetMoviesReducer';
import { SetLoggedInUser } from './SetLoggedInUser';
import { getFavoritesReducer } from './getFavoritesReducer'

const rootReducer = combineReducers({
   movies: GetMoviesReducer,
   user: SetLoggedInUser,
   favorites: getFavoritesReducer
});

export default rootReducer; 