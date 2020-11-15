import { ITask } from '~store/tasks/types';

export interface ITodo {
  id: number;
  dateCreated: Date;
  dateUpdated: Date;
  tasks?: ITask[];
}

export interface ITodoAddRequestPayload extends ITodo {}
export interface ITodoUpdateRequestPayload {
  id: number;
}
export interface ITodoDeleteRequestPayload {
  id: number;
}
export interface ITodoSelectRequestPayload extends ITodo {}

export interface ITodoState {
  items: ITodo[];
  lastTodoId: number;
  selectedTodo: ITodo;
}
