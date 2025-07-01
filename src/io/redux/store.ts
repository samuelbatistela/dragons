/* eslint-disable @typescript-eslint/no-explicit-any */
import { createStore, applyMiddleware, compose } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import thunk from 'redux-thunk';

import rootReducer from './root.reducer';

const initialState = {};
const middleware = [thunk];

const isServer = typeof window === 'undefined';

const persistConfig = {
  key: 'root',
  storage,
};

const composeEnhancers =
  !isServer &&
  process.env.ENVIRONMENT !== 'production' &&
  (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    : compose;

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = createStore(
  persistedReducer,
  initialState,
  composeEnhancers(applyMiddleware(...middleware)),
);

const persistor = persistStore(store);

export { store, persistor };
