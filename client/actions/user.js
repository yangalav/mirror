import axios from 'axios';

export function registerUser(params) {
  return dispatch => axios.post('/api/users/register', params)
    .then((response) => {
      console.log('jkkjhkjh', response);
      return dispatch({ type: 'REG_USER_FULFILLED', payload: response.data });
    })
    .catch(err => dispatch({ type: 'REG_USER_REJECTED', payload: err }));
}

export function loginUser(params) {
  return dispatch => axios.post('/api/users/login', params)
  .then((response) => {
    console.log('whwyup', response.data);
    return dispatch({ type: 'LOGIN_USER_FULFILLED', payload: response.data });
  })
  .catch(err => dispatch({ type: 'LOGIN_USER_REJECTED', payload: err }));
}

export function logoutUser() {
  return dispatch => axios.get('/api/users/logout')
  .then(response => dispatch({ type: 'LOGOUT_USER_FULFILLED', payload: response.data }))
  .catch(err => dispatch({ type: 'LOGOUT_USER_REJECTED', paylout: err }));
}
