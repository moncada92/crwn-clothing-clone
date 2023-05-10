import { compose,createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';

import { rootReducer } from './root-reducer'
import storage from 'redux-persist/lib/storage'
import { persistReducer, persistStore } from 'redux-persist';
import thunk from 'redux-thunk';


const persistConfig = {
  key: 'root',
  storage,
  blackList: ['user']
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const middlewares = [process.env.NODE_ENV === 'development' && logger, thunk].filter(Boolean);

const composeEndhancer = (process.env.NODE_ENV !== 'production' && window && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

const composedEndhancers = composeEndhancer(applyMiddleware(...middlewares))

export const store = createStore(persistedReducer, undefined, composedEndhancers);

export const persistor = persistStore(store);