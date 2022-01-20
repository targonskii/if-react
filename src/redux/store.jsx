import { createStore } from 'redux';
import { persistReducer, persistStore } from 'redux-persist';
import { devToolsEnhancer } from 'redux-devtools-extension/logOnlyInProduction';
import storage from 'redux-persist/lib/storage';

import { loginReducer } from './reducers/loginReducer';

const persistConfig = {
  key: 'root',
  storage,
};

const persistedReducer = persistReducer(persistConfig, loginReducer);

const configureStore = () => {
  const store = createStore(persistedReducer);
  const persistor = persistStore(store);

  return { store, persistor };
};

// const store = createStore(
//   loginReducer,
//   window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
// );

export const { store, persistor } = configureStore();
