import { combineReducers } from 'redux';
// import { persistReducer } from 'redux-persist';
// import AsyncStorage from '@react-native-community/async-storage';

import { todoReducer } from './todos/reducer';

// const persistConfig = {
//   key: 'session',
//   storage: AsyncStorage
// };

export const rootReducer = combineReducers({
  // todos: persistReducer(persistConfig, todoReducer)
  todos: todoReducer
});
