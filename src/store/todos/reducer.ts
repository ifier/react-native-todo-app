import moment from 'moment';

import { TodoActions, TodoActionTypes } from './actions';
import { ITodo, ITodoState } from './types';

const initialState: ITodoState = {
  todos: [],
  tasks: [],
  lastTaskId: 0,
  lastTodoId: 0,
  selectedTodo: {} as ITodo
};

export const todoReducer = (
  state: ITodoState = initialState,
  action: TodoActions
): ITodoState => {
  switch (action.type) {
    case TodoActionTypes.ADD_TODO: {
      const todoId = state.lastTodoId + 1;
      const todo: ITodo = {
        id: todoId,
        dateUpdated: moment().toDate(),
        dateCreated: moment().toDate()
      };
      const todos = [todo, ...state.todos];
      const tasks = [{ ...action.payload, todoId }, ...state.tasks];
      return {
        ...state,
        todos,
        tasks,
        lastTodoId: state.lastTodoId + 1,
        lastTaskId: action.payload.id,
        selectedTodo: todo
      };
    }
    case TodoActionTypes.UPDATE_TODO: {
      const {
        selectedTodo: { id },
        todos
      } = state;
      const searchedTodo =
        todos.find((item) => item.id === id) || ({} as ITodo);
      const updatedTodo = {
        ...searchedTodo,
        dateUpdated: moment().toDate()
      };
      const tasks = [...state.tasks, { ...action.payload, todoId: id }];
      const updatedTodos = [
        updatedTodo,
        ...todos.filter((item) => item.id !== id)
      ];
      return {
        ...state,
        todos: updatedTodos,
        tasks,
        lastTaskId: action.payload.id,
        selectedTodo: updatedTodo
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
