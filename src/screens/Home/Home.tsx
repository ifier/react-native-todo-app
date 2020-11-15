import React from 'react';
import { Dispatch } from 'redux';
import { connect } from 'react-redux';
import { FlatList, RefreshControl, View } from 'react-native';
import { Navigation, Options } from 'react-native-navigation';

import { Text } from '~components/Text';
import { FooterLayout } from '~components/Layout/Footer';
import { BodyLayout } from '~components/Layout';
import { ListEmpty } from '~components/ListEmpty';
import { TouchableIcon } from '~components/TouchableIcon';

import { IRootState } from '~store/types/state';
import {
  ITodo,
  ITodoDeleteRequestPayload,
  ITodoSelectRequestPayload
} from '~store/todos/types';
import { TodoSelectors } from '~store/todos/selectors';
import { TodoActions } from '~store/todos/actions';

import { Screens } from '~navigation/Screens';
import { TodoListItem } from '~screens/Home/TodoListItem';

import { styles } from './styles';

interface IProps {
  componentId: string;
  todos: ITodo[];
  unselectTodoRequest: () => void;
  selectTodoRequest: (payload: ITodoSelectRequestPayload) => void;
  deleteTodoRequest: (payload: ITodoDeleteRequestPayload) => void;
}

interface IState {
  isRefreshing: boolean;
}

class Home extends React.PureComponent<IProps, IState> {
  static screenName = Screens.HOME;

  static options: Options = {
    topBar: {
      title: {
        text: 'Todos'
      }
    }
  };

  state = {
    isRefreshing: false
  };

  onTodoPress = (todo: ITodo) => () => {
    const { selectTodoRequest } = this.props;

    selectTodoRequest(todo);
    this.navigateToTodoScreen();
  };

  onAddNewTodoPress = () => {
    const { unselectTodoRequest } = this.props;

    unselectTodoRequest();
    this.navigateToTodoScreen();
  };

  navigateToTodoScreen = () => {
    const { componentId } = this.props;
    Navigation.push(componentId, {
      component: { name: Screens.TODO }
    });
  };

  onRefresh = () => {
    this.setState({ isRefreshing: true });

    setTimeout(() => {
      this.setState({ isRefreshing: false });
    }, 1000);
  };

  onDeletePressHandler = ({ id }: ITodo) => {
    const { deleteTodoRequest } = this.props;

    deleteTodoRequest({ id });
  };

  render() {
    const { todos } = this.props;
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
            data={todos}
            style={[styles.listContainer]}
            contentContainerStyle={styles.listContainer}
            renderItem={({ item }: { item: ITodo }) => (
              <TodoListItem
                todo={item}
                onPress={this.onTodoPress}
                onDeletePress={this.onDeletePressHandler}
              />
            )}
            keyExtractor={(item) => String(item.id)}
            ListEmptyComponent={
              <ListEmpty title="No items yet" text="Add your first todo list" />
            }
          />

          <FooterLayout>
            {todos.length ? (
              <Text variant="footnote1">{todos.length} todos</Text>
            ) : (
              <View />
            )}
            <TouchableIcon
              icon="pencil-plus-outline"
              onPress={this.onAddNewTodoPress}
            />
          </FooterLayout>
        </BodyLayout>
      </>
    );
  }
}

const mapStateToProps = (state: IRootState) => ({
  todos: TodoSelectors.makeGetTodosWithTasks(state)
});

const mapDispatchToProps = (dispatch: Dispatch) => ({
  deleteTodoRequest: (payload: ITodoDeleteRequestPayload) =>
    dispatch(TodoActions.deleteRequest(payload)),
  unselectTodoRequest: () => dispatch(TodoActions.unselectTodoRequest()),
  selectTodoRequest: (payload: ITodoSelectRequestPayload) =>
    dispatch(TodoActions.selectTodoRequest(payload))
});

export const HomeScreen = connect(mapStateToProps, mapDispatchToProps)(Home);
