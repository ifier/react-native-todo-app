import { createSelector } from 'reselect';

import { IRootState } from '../types/state';
import { ITodo } from '~store/todos/types';

const todosSelector = (state: IRootState) => state.todos.items;
const tasksSelector = (state: IRootState) => state.tasks.items;

const makeGetTodosWithTasks = createSelector(
  [todosSelector, tasksSelector],
  (todos, tasks) => {
    return todos.reduce((acc: ITodo[], todo) => {
      const todoTasks = tasks.filter((task) => task.todoId === todo.id);

      if (!todoTasks.length) return acc;

      return [...acc, { ...todo, tasks: todoTasks }];
    }, []);
  }
);

export const TodoSelectors = {
  makeGetTodosWithTasks
};
