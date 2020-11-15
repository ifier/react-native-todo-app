export interface ITask {
  todoId: number;
  id: number;
  isCompleted: boolean;
  text: string;
  dueDate: Date;
}

export interface ITasksAddRequestPayload extends ITask {}
export interface ITasksDeleteRequestPayload {
  id: number;
}
export interface ITasksSetIsCompletedRequestPayload extends ITask {}

export interface ITasksState {
  items: ITask[];
  lastTaskId: number;
}
