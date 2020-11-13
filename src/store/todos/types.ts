export interface ITask {
  todoId: number;
  id: number;
  isCompleted: boolean;
  text: string;
  dueDate: Date;
}

export interface ITodo {
  id: number;
  dateCreated: Date;
  dateUpdated: Date;
}

export interface ITodoAddRequestPayload {
  id: number;
  isCompleted: boolean;
  text: string;
  dueDate: Date;
}

export interface ITodoAddResponsePayload {
  task: ITask;
  todo: ITodo;
}

export interface ITodoUpdateRequestPayload extends ITodoAddRequestPayload {}

export interface ITodoSelectRequestPayload extends ITodo {}

export interface ITodoWithTasks extends ITodo {
  tasks: ITask[];
}

export interface ITodoState {
  todos: ITodo[];
  tasks: ITask[];
  lastTodoId: number;
  lastTaskId: number;
  selectedTodo: ITodo;
}
