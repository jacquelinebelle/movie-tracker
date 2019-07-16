import { combineReducers } from 'redux';
import { GetMoviesReducer } from './GetMoviesReducer';
import { SetLoggedInUser} from './SetLoggedInUser';

const rootReducer = combineReducers({
   movies: GetMoviesReducer,
   user: SetLoggedInUser
});

export default rootReducer;