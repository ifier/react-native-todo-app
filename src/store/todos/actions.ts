import { createAction, ActionsUnion } from '../types/actions';
import {
  ITodoAddRequestPayload,
  ITodoDeleteRequestPayload,
  ITodoSelectRequestPayload,
  ITodoUpdateRequestPayload
} from './types';

export enum TodoActionTypes {
  ADD_TODO = '[Todo] ADD_TODO',
  UPDATE_TODO = '[Todo] UPDATE_TODO',
  DELETE_TODO = '[Todo] DELETE_TODO',
  SELECT_TODO = '[Todo] SELECT_TODO',
  UNSELECT_TODO = '[Todo] UNSELECT_TODO'
}

export const TodoActions = {
  addRequest: (payload: ITodoAddRequestPayload) =>
    createAction(TodoActionTypes.ADD_TODO, payload),
  updateRequest: (payload: ITodoUpdateRequestPayload) =>
    createAction(TodoActionTypes.UPDATE_TODO, payload),
  deleteRequest: (payload: ITodoDeleteRequestPayload) =>
    createAction(TodoActionTypes.DELETE_TODO, payload),
  selectTodoRequest: (payload: ITodoSelectRequestPayload) =>
    createAction(TodoActionTypes.SELECT_TODO, payload),
  unselectTodoRequest: () => createAction(TodoActionTypes.UNSELECT_TODO)
};

// eslint-disable-next-line @typescript-eslint/no-redeclare
export type TodoActions = ActionsUnion<typeof TodoActions>;
