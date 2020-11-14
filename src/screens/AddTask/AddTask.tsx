import React from 'react';
import moment from 'moment';
import { Dispatch } from 'redux';
import { connect } from 'react-redux';
import { ScrollView, TextInput, View } from 'react-native';
import { Navigation, Options } from 'react-native-navigation';
import DatePicker from 'react-native-date-picker';

import { Screens } from '~navigation/Screens';
import {
  BodyLayout,
  FooterLayout,
  LayoutAvoidKeyboard
} from '~components/Layout';
import { Text } from '~components/Text';
import { Button } from '~components/Button';
import { ListItem } from '~components/ListItem';

import { IRootState } from '~store/types/state';
import { TodoActions } from '~store/todos/actions';
import {
  ITodo,
  ITodoAddRequestPayload,
  ITodoUpdateRequestPayload
} from '~store/todos/types';

import { styles } from './styles';

interface IProps {
  componentId: string;
  selectedTodo: ITodo;
  todos: ITodo[];
  lastTodoId: number;
  lastTaskId: number;
  addRequest: (payload: ITodoAddRequestPayload) => void;
  updateRequest: (payload: ITodoUpdateRequestPayload) => void;
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
    date: new Date()
  };

  onInputChangeHandler = (text: string) => {
    this.setState({ text });
  };

  onDateChange = (date: Date) => {
    this.setState({ date: moment(date).toDate() });
  };

  onAddButtonPress = () => {
    const { componentId, selectedTodo } = this.props;
    const { addRequest, updateRequest, lastTaskId } = this.props;
    const { text, date } = this.state;
    const task: ITodoAddRequestPayload = {
      id: lastTaskId + 1,
      isCompleted: false,
      text,
      dueDate: date
    };

    if (!selectedTodo?.id) {
      addRequest(task);
    } else {
      updateRequest(task);
    }

    Navigation.dismissModal(componentId);
  };

  render() {
    const { text, date } = this.state;

    return (
      <>
        <BodyLayout>
          <LayoutAvoidKeyboard>
            <ScrollView
              contentInsetAdjustmentBehavior="automatic"
              contentContainerStyle={{ flexGrow: 1 }}>
              <ListItem>
                <TextInput
                  multiline
                  autoFocus
                  value={text}
                  style={styles.textInput}
                  placeholder="Text of task"
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
            <FooterLayout>
              <Button
                disabled={!text}
                color="primary"
                variant="contained"
                onPress={this.onAddButtonPress}>
                Add
              </Button>
            </FooterLayout>
          </LayoutAvoidKeyboard>
        </BodyLayout>
      </>
    );
  }
}

const mapStateToProps = (state: IRootState) => ({
  todos: state.todos.todos,
  selectedTodo: state.todos.selectedTodo,
  lastTodoId: state.todos.lastTodoId,
  lastTaskId: state.todos.lastTaskId
});

const mapDispatchToProps = (dispatch: Dispatch) => ({
  addRequest: (payload: ITodoAddRequestPayload) =>
    dispatch(TodoActions.addRequest(payload)),
  updateRequest: (payload: ITodoUpdateRequestPayload) =>
    dispatch(TodoActions.updateRequest(payload))
});

export const AddTaskScreen = connect(
  mapStateToProps,
  mapDispatchToProps
)(AddTask);
