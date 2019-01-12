import {
  SIGN_IN_START,
  SIGN_IN_SUCCESS,
  SIGN_IN_FAILURE,
  SIGN_OUT_SUCCESS,
  SIGN_OUT_START,
} from 'actions/actionTypes';

const auth = ( state = {}, action ) => {
  switch ( action.type ) {
    case SIGN_IN_START:
      return {
        ...state,
        isLoggingIn: true,
      };
    case SIGN_IN_SUCCESS:
      return {
        ...state,
        isLoggingIn: false,
        isLoggedIn: true,
        user: action.user
      };
    case SIGN_IN_FAILURE:
      return {
        ...state,
        isLoggedIn: false,
        error: action.error
      };
    case SIGN_OUT_SUCCESS:
      return {
        ...state,
        isLoggedIn: false,
        user: null,
      };
    case SIGN_OUT_START:
    default:
      return state;
  }
}

export default auth;