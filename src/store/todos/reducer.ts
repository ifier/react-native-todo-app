import moment from 'moment';

import { TodoActions, TodoActionTypes } from './actions';
import { ITodo, ITodoState } from './types';

const initialState: ITodoState = {
  items: [],
  lastTodoId: 0,
  selectedTodo: {} as ITodo
};

// ATTENTION !!!!!!!!!!!!!
// ATTENTION !!!!!!!!!!!!!
// ATTENTION !!!!!!!!!!!!!
// Ideally, all this functionality related to new arrays and etc should lives
// at API. We can make request to API, it will update todos/tasks and return new array/updated value
// OR, if we don't have API - at sagas/thunks

export const todoReducer = (
  state: ITodoState = initialState,
  action: TodoActions
): ITodoState => {
  switch (action.type) {
    case TodoActionTypes.ADD_TODO: {
      const items = [action.payload, ...state.items];
      return {
        ...state,
        items,
        lastTodoId: action.payload.id,
        selectedTodo: action.payload
      };
    }
    case TodoActionTypes.UPDATE_TODO: {
      const { id: todoId } = action.payload;
      const searchedTodo =
        state.items.find((item) => item.id === todoId) || ({} as ITodo);
      const updatedTodo = {
        ...searchedTodo,
        dateUpdated: moment().toDate()
      };
      const items = [
        updatedTodo,
        ...state.items.filter((item) => item.id !== todoId)
      ];
      return {
        ...state,
        items
      };
    }
    case TodoActionTypes.DELETE_TODO: {
      const { id } = action.payload;
      return {
        ...state,
        items: state.items.filter((todo) => todo.id !== id),
        selectedTodo: initialState.selectedTodo
      };
    }
    case TodoActionTypes.SELECT_TODO: {
      return {
        ...state,
        selectedTodo: action.payload
      };
    }
    case TodoActionTypes.UNSELECT_TODO: {
      return {
        ...state,
        selectedTodo: initialState.selectedTodo
      };
    }
    default: {
      return state;
    }
  }
};
