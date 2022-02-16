import { combineReducers } from 'redux';

import { loginReducer } from './loginReducer';
import { hotelsReducer } from './hotelsReducer';
import { queryReducer } from './queryReducer';
import { themesReducer } from './themesReducer';

const rootReducer = combineReducers({
  login: loginReducer,
  hotels: hotelsReducer,
  query: queryReducer,
  theme: themesReducer,
});

export default rootReducer;
