import { combineReducers } from 'redux';

import { loginReducer } from './loginReducer';
import { hotelsReducer } from './hotelsReducer';
import { queryReducer } from './queryReducer';

const rootReducer = combineReducers({
  login: loginReducer,
  hotels: hotelsReducer,
  query: queryReducer,
});

export default rootReducer;
