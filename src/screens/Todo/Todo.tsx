import React from 'react';
import moment from 'moment';
import { Dispatch } from 'redux';
import { Alert, FlatList, RefreshControl } from 'react-native';
import { connect } from 'react-redux';
import { Navigation, Options } from 'react-native-navigation';

import { ListEmpty } from '~components/ListEmpty';
import { BodyLayout, FooterLayout } from '~components/Layout';
import { TouchableIcon } from '~components/TouchableIcon';
import { TaskListItem } from './TaskListItem';

import {
  ITodo,
  ITodoAddRequestPayload,
  ITodoDeleteRequestPayload,
  ITodoUpdateRequestPayload
} from '~store/todos/types';
import { IRootState } from '~store/types/state';
import { TodoActions } from '~store/todos/actions';
import { TasksActions } from '~store/tasks/actions';
import {
  ITask,
  ITasksDeleteRequestPayload,
  ITasksSetIsCompletedRequestPayload
} from '~store/tasks/types';
import { TasksSelectors } from '~store/tasks/selectors';

import { Screens, TopBarButtons } from '~navigation/Screens';

import { styles } from './styles';

interface IProps {
  componentId: string;
  tasks: ITask[];
  lastTodoId: number;
  selectedTodo: ITodo;
  addTodoRequest: (payload: ITodoAddRequestPayload) => void;
  updateTodoRequest: (payload: ITodoUpdateRequestPayload) => void;
  deleteTodoRequest: (payload: ITodoDeleteRequestPayload) => void;
  setTaskIsCompletedRequest: (
    payload: ITasksSetIsCompletedRequestPayload
  ) => void;
  deleteTaskRequest: (payload: ITasksDeleteRequestPayload) => void;
}

class Todo extends React.PureComponent<IProps> {
  static screenName = Screens.TODO;

  static options: Options = {
    topBar: {
      rightButtons: [
        {
          id: TopBarButtons.ADD_TASK,
          component: { name: TopBarButtons.ADD_TASK }
        }
      ]
    }
  };

  state = {
    isRefreshing: false
  };

  componentDidMount() {
    const { selectedTodo, addTodoRequest, lastTodoId } = this.props;
    const todoId = lastTodoId + 1;
    const todo: ITodo = {
      id: todoId,
      dateUpdated: moment().toDate(),
      dateCreated: moment().toDate()
    };

    if (!selectedTodo.id) {
      addTodoRequest(todo);
    }
  }

  componentWillUnmount() {
    const {
      tasks,
      selectedTodo: { id },
      deleteTodoRequest
    } = this.props;

    if (!tasks.length) {
      deleteTodoRequest({ id });
    }
  }

  onCheckboxPress = (task: ITask) => (isCompleted: boolean) => {
    const {
      setTaskIsCompletedRequest,
      updateTodoRequest,
      selectedTodo: { id }
    } = this.props;

    setTaskIsCompletedRequest({
      ...task,
      isCompleted
    });
    updateTodoRequest({ id });
  };

  onDeleteTodoPressHandler = () => {
    const {
      deleteTodoRequest,
      selectedTodo: { id },
      componentId
    } = this.props;

    Alert.alert(
      'Delete',
      'Do you want to delete Todo? All tasks will be lost',
      [
        {
          text: 'Delete',
          onPress: () => {
            Navigation.pop(componentId);
            deleteTodoRequest({ id });
          },
          style: 'destructive'
        },
        { text: 'Cancel', style: 'cancel' }
      ]
    );
  };

  onDeleteTaskPressHandler = ({ id }: ITask) => {
    const { deleteTaskRequest } = this.props;

    deleteTaskRequest({ id });
  };

  onRefresh = () => {
    this.setState({ isRefreshing: true });

    setTimeout(() => {
      this.setState({ isRefreshing: false });
    }, 1000);
  };

  render() {
    const { tasks } = this.props;
    const { isRefreshing } = this.state;

    return (
      <>
        <BodyLayout>
          <FlatList
            refreshing={isRefreshing}
            refreshControl={
              <RefreshControl
                refreshing={isRefreshing}
                onRefresh={this.onRefresh}
                size={5}
              />
            }
            data={tasks}
            style={[styles.listContainer]}
            contentContainerStyle={styles.listContainer}
            renderItem={({ item }) => (
              <TaskListItem
                task={item}
                onDeletePress={this.onDeleteTaskPressHandler}
                onCheckboxPress={this.onCheckboxPress}
              />
            )}
            keyExtractor={(item) => String(item.id)}
            ListEmptyComponent={
              <ListEmpty title="No tasks yet" text="Add your first task :)" />
            }
          />
          <FooterLayout>
            <TouchableIcon
              icon="delete-outline"
              onPress={this.onDeleteTodoPressHandler}
              color="error"
              disabled={!tasks.length}
            />
          </FooterLayout>
        </BodyLayout>
      </>
    );
  }
}

const mapStateToProps = (state: IRootState) => ({
  tasks: TasksSelectors.makeGetTasksByTodo(state),
  selectedTodo: state.todos.selectedTodo,
  lastTodoId: state.todos.lastTodoId
});

const mapDispatchToProps = (dispatch: Dispatch) => ({
  addTodoRequest: (payload: ITodoAddRequestPayload) =>
    dispatch(TodoActions.addRequest(payload)),
  updateTodoRequest: (payload: ITodoUpdateRequestPayload) =>
    dispatch(TodoActions.updateRequest(payload)),
  deleteTodoRequest: (payload: ITodoDeleteRequestPayload) =>
    dispatch(TodoActions.deleteRequest(payload)),
  deleteTaskRequest: (payload: ITasksDeleteRequestPayload) =>
    dispatch(TasksActions.deleteRequest(payload)),
  setTaskIsCompletedRequest: (payload: ITasksSetIsCompletedRequestPayload) =>
    dispatch(TasksActions.setIsCompletedRequest(payload))
});

export const TodoScreen = connect(mapStateToProps, mapDispatchToProps)(Todo);
