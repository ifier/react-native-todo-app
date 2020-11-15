import { createAction, ActionsUnion } from '../types/actions';
import {
  ITasksAddRequestPayload,
  ITasksDeleteRequestPayload,
  ITasksSetIsCompletedRequestPayload
} from './types';

export enum TasksActionTypes {
  ADD_TASK = '[Todo] ADD_TASK',
  DELETE_TASK = '[Todo] DELETE_TASK',
  SET_TASK_IS_COMPLETED = '[Todo] SET_TASK_IS_COMPLETED'
}

export const TasksActions = {
  addRequest: (payload: ITasksAddRequestPayload) =>
    createAction(TasksActionTypes.ADD_TASK, payload),
  deleteRequest: (payload: ITasksDeleteRequestPayload) =>
    createAction(TasksActionTypes.DELETE_TASK, payload),
  setIsCompletedRequest: (payload: ITasksSetIsCompletedRequestPayload) =>
    createAction(TasksActionTypes.SET_TASK_IS_COMPLETED, payload)
};

// eslint-disable-next-line @typescript-eslint/no-redeclare
export type TasksActions = ActionsUnion<typeof TasksActions>;
