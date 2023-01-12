import { compose, createStore, applyMiddleware } from 'redux';
// import logger from 'redux-logger';
// import { configureStore } from '@reduxjs/toolkit';

import { rootReducer } from './root-reducer';

const loggerMiddleware = (store) => (next) => (action) => {
  if (!action.type) return next(action);

  console.log('action type:', action.type);
  console.log('action payload:', action.payload);
  console.log('current state:', store.getState());

  next(action);

  console.log('next state:', store.getState());
};

const middlewares = [loggerMiddleware];

const composeEnhancers = compose(applyMiddleware(...middlewares));

export const store = createStore(rootReducer, undefined, composeEnhancers);
