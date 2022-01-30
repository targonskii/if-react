import { createStore, applyMiddleware } from 'redux';
import { persistReducer, persistStore } from 'redux-persist';
import { composeWithDevTools } from 'redux-devtools-extension';
import storage from 'redux-persist/lib/storage';

import hotelsSaga from './sagas/hotelsSaga';

import rootReducer from './reducers';

import middleWare, { sagaMiddleware } from './middleware';

const persistConfig = {
  key: 'root',
  storage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);
const composeEnhancers = composeWithDevTools({});
const configureStore = () => {
  const store = createStore(
    persistedReducer,
    composeEnhancers(applyMiddleware(...middleWare))
  );
  const persistor = persistStore(store);

  sagaMiddleware.run(hotelsSaga);

  return { store, persistor };
};

export const { store, persistor } = configureStore();
