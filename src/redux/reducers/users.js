import { USER_LOGIN }  from '../actions/users';

const initialState = {

}

export const userLogin = (state = initialState, action) => {
  switch(action.type){
    case USER_LOGIN:
      return action.user
    
    default:
      return state;
  }
}

export default userLogin;