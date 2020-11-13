import { createStore, applyMiddleware, compose } from 'redux';
import { createLogger } from 'redux-logger';
import { composeWithDevTools } from 'remote-redux-devtools';

import { rootReducer } from './rootReducer';

export const configureStore = () => {
  // If you want we can add middlewares here. Such as redux-thunk or saga or etc...
  const middlewares = __DEV__ ? [createLogger()] : [];

  let debugWrapper = (data: any) => data;
  if (__DEV__) {
    debugWrapper = composeWithDevTools({ realtime: true, port: 8000 });
  }

  return createStore(
    rootReducer,
    {},
    debugWrapper(compose(applyMiddleware(...middlewares)))
  );
};
