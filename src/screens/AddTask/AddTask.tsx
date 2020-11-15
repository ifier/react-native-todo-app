import React from 'react';
import moment from 'moment';
import { Dispatch } from 'redux';
import { connect } from 'react-redux';
import { Alert, ScrollView, TextInput, View } from 'react-native';
import { Navigation, Options } from 'react-native-navigation';
import DatePicker from 'react-native-date-picker';

import { Screens, TopBarButtons } from '~navigation/Screens';
import { BodyLayout } from '~components/Layout';
import { Text } from '~components/Text';
import { ListItem } from '~components/ListItem';

import { IRootState } from '~store/types/state';
import { TodoActions } from '~store/todos/actions';
import { ITodo, ITodoUpdateRequestPayload } from '~store/todos/types';
import { TasksActions } from '~store/tasks/actions';
import { ITasksAddRequestPayload } from '~store/tasks/types';

import { styles } from './styles';

interface IProps {
  componentId: string;
  selectedTodo: ITodo;
  lastTodoId: number;
  lastTaskId: number;
  addTaskRequest: (payload: ITasksAddRequestPayload) => void;
  updateTodoRequest: (payload: ITodoUpdateRequestPayload) => void;
}

interface IState {
  text: string;
  date: Date;
}

class AddTask extends React.PureComponent<IProps, IState> {
  static screenName = Screens.ADD_TASK;

  static options: Options = {
    topBar: {
      title: {
        text: 'New task'
      }
    }
  };

  state = {
    text: '',
    date: moment().add(1, 'hours').toDate()
  };

  componentDidMount() {
    const { componentId } = this.props;

    Navigation.mergeOptions(componentId, {
      topBar: {
        rightButtons: [
          {
            id: TopBarButtons.SAVE_TASK,
            component: {
              name: TopBarButtons.SAVE_TASK,
              passProps: { onPress: this.onAddButtonPress }
            }
          }
        ]
      }
    });
  }

  onInputChangeHandler = (text: string) => {
    this.setState({ text });
  };

  onDateChange = (date: Date) => {
    this.setState({ date: moment(date).toDate() });
  };

  onAddButtonPress = () => {
    const { text, date } = this.state;

    if (!text) {
      return Alert.alert('Required', 'Text of task is required');
    }

    const {
      componentId,
      selectedTodo: { id: todoId },
      updateTodoRequest,
      addTaskRequest,
      lastTaskId
    } = this.props;

    const task: ITasksAddRequestPayload = {
      todoId,
      id: lastTaskId + 1,
      isCompleted: false,
      text,
      dueDate: date
    };
    addTaskRequest(task);
    updateTodoRequest({ id: todoId });
    return Navigation.dismissModal(componentId);
  };

  render() {
    const { text, date } = this.state;

    return (
      <>
        <BodyLayout>
          <ScrollView
            contentInsetAdjustmentBehavior="automatic"
            contentContainerStyle={{ flexGrow: 1 }}>
            <ListItem>
              <TextInput
                multiline
                autoFocus
                value={text}
                style={styles.textInput}
                placeholder="Text of task *"
                onChangeText={this.onInputChangeHandler}
              />
            </ListItem>
            <ListItem>
              <View style={styles.datePickerContainer}>
                <View style={styles.datePickerHeader}>
                  <Text>Due to:</Text>
                  <Text color="secondary" variant="subhead1">
                    {moment(date).format('DD MMMM YYYY, hh:mm A')}
                  </Text>
                </View>
              </View>
            </ListItem>
            <ListItem>
              <DatePicker
                date={date}
                onDateChange={this.onDateChange}
                style={styles.datePicker}
              />
            </ListItem>
          </ScrollView>
        </BodyLayout>
      </>
    );
  }
}

const mapStateToProps = (state: IRootState) => ({
  selectedTodo: state.todos.selectedTodo,
  lastTaskId: state.tasks.lastTaskId
});

const mapDispatchToProps = (dispatch: Dispatch) => ({
  updateTodoRequest: (payload: ITodoUpdateRequestPayload) =>
    dispatch(TodoActions.updateRequest(payload)),
  addTaskRequest: (payload: ITasksAddRequestPayload) =>
    dispatch(TasksActions.addRequest(payload))
});

export const AddTaskScreen = connect(
  mapStateToProps,
  mapDispatchToProps
)(AddTask);
