export default function reducer(state = {
  loggedIn: false,
  shouldRedirect: false,
  errorMessage: null,
  user: null,
}, action) {
  console.log('payload', action.payload);
  switch (action.type) {
    case 'REG_USER_FULFILLED': {
      return {
        ...state,
        shouldRedirect: true,
        errorMessage: null,
        user: action.payload.email,
      };
    }
    case 'LOGIN_USER_FULFILLED': {
      return {
        ...state,
        loggedIn: true,
        shouldRedirect: true,
        errorMessage: null,
        user: action.payload.email,
      };
    }
    case 'LOGIN_USER_REJECTED': {
      return {
        ...state,
        loggedIn: false,
        shouldRedirect: false,
        errorMessage: action.payload.message,
        user: null,
      };
    }
    case 'LOGOUT_USER_FULFILLED': {
      return {
        ...state,
        authenticated: false,
        shouldRedirect: false,
        errorMessage: null,
        user: null,
      };
    }
    default:
      return state;
  }
}
