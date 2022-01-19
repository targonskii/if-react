import { handleActions } from 'redux-actions';

import { signIn, signOut, login } from '../actions/loginActions';

import { initialLoginState } from '../constants/initialState';

export const loginReducer = handleActions(
  {
    [signIn]: (state, { payload }) => {
      return {
        ...state,
        isLoggedIn: payload,
      };
    },
    [signOut]: (state, { payload }) => {
      return {
        ...state,
        isLoggedIn: payload,
      };
    },
    [login]: (state, { payload }) => {
      return {
        ...state,
        email: payload.email,
        password: payload.password,
      };
    },
  },
  initialLoginState
);

// const loginReducer = (state = initialLoginState, action) => {
//   switch (action.type) {
//     case actionTypes.signIn:
//       return {
//         ...state,
//         isLoggedIn: true,
//       };
//     case actionTypes.signOut:
//       return {
//         ...state,
//         isLoggedIn: false,
//       };
//     case actionTypes.addUser:
//       return {
//         ...state,
//         email: action.email,
//         password: action.password,
//       };
//     default:
//       return state;
//   }
// };

// export { loginReducer };
