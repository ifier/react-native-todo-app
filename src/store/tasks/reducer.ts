import { TasksActions, TasksActionTypes } from './actions';
import { ITasksState } from './types';

const initialState: ITasksState = {
  items: [],
  lastTaskId: 0
};

// ATTENTION !!!!!!!!!!!!!
// ATTENTION !!!!!!!!!!!!!
// ATTENTION !!!!!!!!!!!!!
// Ideally, all this functionality related to new arrays and etc should lives
// at API. We can make request to API, it will update todos/tasks and return new array/updated value
// OR, if we don't have API - at sagas/thunks

export const tasksReducer = (
  state: ITasksState = initialState,
  action: TasksActions
): ITasksState => {
  switch (action.type) {
    case TasksActionTypes.ADD_TASK: {
      const { id } = action.payload;
      const items = [...state.items, action.payload];
      return {
        ...state,
        items,
        lastTaskId: id
      };
    }
    case TasksActionTypes.DELETE_TASK: {
      const { id } = action.payload;
      return {
        ...state,
        items: state.items.filter((item) => item.id !== id)
      };
    }
    case TasksActionTypes.SET_TASK_IS_COMPLETED: {
      const { id } = action.payload;
      // Week place because we are going through all array :(
      const items = state.items.map((task) =>
        task.id === id ? action.payload : task
      );
      return {
        ...state,
        items
      };
    }
    default: {
      return state;
    }
  }
};
