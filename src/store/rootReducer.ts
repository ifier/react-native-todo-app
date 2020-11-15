import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import AsyncStorage from '@react-native-community/async-storage';

import { todoReducer } from './todos/reducer';
import { tasksReducer } from './tasks/reducer';

const todosPersistConfig = {
  key: 'todos',
  storage: AsyncStorage
};

const tasksPersistConfig = {
  key: 'tasks',
  storage: AsyncStorage
};

export const rootReducer = combineReducers({
  todos: persistReducer(todosPersistConfig, todoReducer),
  tasks: persistReducer(tasksPersistConfig, tasksReducer)
});
