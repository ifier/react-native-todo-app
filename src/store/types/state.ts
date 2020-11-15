import { ITodoState } from '~store/todos/types';
import { ITasksState } from '~store/tasks/types';

export interface IRootState {
  todos: ITodoState;
  tasks: ITasksState;
}
