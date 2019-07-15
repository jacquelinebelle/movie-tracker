import { combineReducers } from 'redux';
import { GetMoviesReducer } from './GetMoviesReducer';

const rootReducer = combineReducers({
   movies: GetMoviesReducer
});

export default rootReducer;