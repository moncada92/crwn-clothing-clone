import { compose,createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';

import { rootReducer } from './root-reducer'
import { type } from '@testing-library/user-event/dist/type';

const loggerMiddleware = (store) => (next) => (action) =>{

  if (!action.type) {
    return next(action);
  }

  console.log('type', action.type)
  console.log('payload', action.payload)
  console.log('currentState', store.getState())

  next(action)

  console.log('nexState', store.getState())
}

const middlewares = [logger];

const composedEndhancers = compose(applyMiddleware(...middlewares))

export const store = createStore(rootReducer, undefined, composedEndhancers);