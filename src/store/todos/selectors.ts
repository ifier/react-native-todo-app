import { createSelector } from 'reselect';
// import { groupBy, values } from 'lodash';

import { IRootState } from '../types/state';

const todosSelector = (state: IRootState) => state.todos.todos;
const tasksSelector = (state: IRootState) => state.todos.tasks;
const selectedTodoSelector = (state: IRootState) => state.todos.selectedTodo;

const makeGetTodosWithTasks = createSelector(
  [todosSelector, tasksSelector],
  (todos, tasks) => {
    return todos.map((todo) => {
      const todoTasks = tasks.filter((task) => task.todoId === todo.id);

      return {
        ...todo,
        tasks: todoTasks
      };
    });
  }
);

const makeGetTasksByTodo = createSelector(
  [tasksSelector, selectedTodoSelector],
  (tasks, selectedTodo) => {
    return tasks.filter((task) => task.todoId === selectedTodo.id);
  }
);

export const TodoSelectors = {
  makeGetTodosWithTasks,
  makeGetTasksByTodo
};
