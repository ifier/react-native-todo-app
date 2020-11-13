import React from 'react';
import { Dispatch } from 'redux';
import { FlatList, View } from 'react-native';
import { connect } from 'react-redux';
import { Options } from 'react-native-navigation';

import { ListEmpty } from '~components/ListEmpty';
import { Text } from '~components/Text';
import { ListItem } from '~components/ListItem';
import { BodyLayout, FooterLayout } from '~components/Layout';
import { TouchableIcon } from '~components/TouchableIcon';

import { ITask, ITodo } from '~store/todos/types';
import { IRootState } from '~store/types/state';
import { TodoSelectors } from '~store/todos/selectors';
import { TodoActions } from '~store/todos/actions';

import { Screens, TopBarButtons } from '~navigation/Screens';

import { styles } from './styles';

interface IProps {
  tasks: ITask[];
  passedTodo: ITodo;
  selectedTodo: ITodo;
  unselectTodoRequest: () => void;
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

  componentWillUnmount() {
    const { unselectTodoRequest } = this.props;

    unselectTodoRequest();
  }

  render() {
    const { tasks } = this.props;

    return (
      <>
        <BodyLayout>
          <FlatList
            data={tasks}
            style={[styles.listContainer]}
            contentContainerStyle={styles.listContainer}
            renderItem={({ item }) => (
              <ListItem>
                <Text>{item.text}</Text>
                <Text>{item.id}</Text>
              </ListItem>
            )}
            keyExtractor={(item) => String(item.id)}
            ListEmptyComponent={
              <ListEmpty title="No tasks yet" text="Add your first task :)" />
            }
          />
        </BodyLayout>
        <FooterLayout>
          <TouchableIcon
            icon="delete-outline"
            onPress={() => {}}
            color="error"
          />
          <View />
        </FooterLayout>
      </>
    );
  }
}

const mapStateToProps = (state: IRootState) => ({
  selectedTodo: state.todos.selectedTodo,
  tasks: TodoSelectors.makeGetTasksByTodo(state)
});

const mapDispatchToProps = (dispatch: Dispatch) => ({
  unselectTodoRequest: () => dispatch(TodoActions.unselectRequest())
});

export const TodoScreen = connect(mapStateToProps, mapDispatchToProps)(Todo);
