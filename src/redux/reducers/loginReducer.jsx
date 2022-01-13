import { actionTypes } from '../constants/actionTypes';

import { initialLoginState } from '../constants/initialState';

const loginReducer = (state = initialLoginState, action) => {
  switch (action.type) {
    case actionTypes.signIn:
      return {
        ...state,
        isLoggedIn: true,
      };
    case actionTypes.signOut:
      return {
        ...state,
        isLoggedIn: false,
      };
    case actionTypes.addUser:
      return {
        ...state,
        email: action.email,
        password: action.password,
      };
    default:
      return state;
  }
};

export { loginReducer };
