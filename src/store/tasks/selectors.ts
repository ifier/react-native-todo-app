import { createSelector } from 'reselect';

import { IRootState } from '../types/state';

const tasksSelector = (state: IRootState) => state.tasks.items;
const selectedTodoSelector = (state: IRootState) => state.todos.selectedTodo;

const makeGetTasksByTodo = createSelector(
  [tasksSelector, selectedTodoSelector],
  (tasks, selectedTodo) => {
    return tasks.filter((task) => task.todoId === selectedTodo.id);
  }
);

export const TasksSelectors = {
  makeGetTasksByTodo
};
