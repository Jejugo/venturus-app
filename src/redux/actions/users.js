
import axios from 'axios';

export const USER_LOGIN = 'USER_LOGIN';

export const userLogIn = (user) => {
  return {
    type: USER_LOGIN,
    user
  }
}

export const userLogInThunk = () => {
  return (dispatch) => {
    axios.get('http://localhost:3001/userlogged')
    .then(result => {
      console.log('success ', result.data);
      dispatch(userLogIn(result.data));
    }).catch(err => {
      console.log('error: ', err);
    });
  }
}