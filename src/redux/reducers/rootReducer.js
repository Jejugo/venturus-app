import userLogin from './users';
import { combineReducers } from 'redux';


const rootReducer = combineReducers({
  userLogged: userLogin
});

export default rootReducer;