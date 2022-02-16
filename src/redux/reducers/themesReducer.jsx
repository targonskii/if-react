import { handleActions } from 'redux-actions';

import { setTheme } from '../actions/themesActions';

import { initialThemesState } from '../constants/initialState';

export const themesReducer = handleActions(
  {
    [setTheme]: (state, { payload }) => {
      return {
        ...state,
        theme: payload,
      };
    },
  },
  initialThemesState
);
