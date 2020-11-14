import React from 'react';
import moment from 'moment';
import { Dispatch } from 'redux';
import { connect } from 'react-redux';
import { FlatList, View } from 'react-native';
import { Navigation, Options } from 'react-native-navigation';

import { Text } from '~components/Text';
import { FooterLayout } from '~components/Layout/Footer';
import { BodyLayout } from '~components/Layout';
import { ListItem } from '~components/ListItem';
import { ListEmpty } from '~components/ListEmpty';
import { TouchableIcon } from '~components/TouchableIcon';

import { IRootState } from '~store/types/state';
import {
  ITodo,
  ITodoSelectRequestPayload,
  ITodoWithTasks
} from '~store/todos/types';
import { TodoSelectors } from '~store/todos/selectors';
import { TodoActions } from '~store/todos/actions';

import { Screens } from '~navigation/Screens';

import { styles } from './styles';

interface IProps {
  componentId: string;
  todos: ITodoWithTasks[];
  selectTodoRequest: (payload: ITodoSelectRequestPayload) => void;
}

class Home extends React.PureComponent<IProps> {
  static screenName = Screens.HOME;

  static options: Options = {
    topBar: {
      title: {
        text: 'Todos'
      }
    }
  };

  onTodoPress = (todo: ITodo) => () => {
    const { selectTodoRequest } = this.props;

    selectTodoRequest(todo);
    this.navigateToTodoScreen();
  };

  onAddNewTodoPress = () => {
    this.navigateToTodoScreen();
  };

  navigateToTodoScreen = () => {
    const { componentId } = this.props;
    Navigation.push(componentId, {
      component: { name: Screens.TODO }
    });
  };

  renderItem = ({ item }: { item: ITodoWithTasks }) => {
    const { tasks, dateUpdated } = item;
    const [firstTask, secondTask] = tasks;

    return (
      <ListItem onPress={this.onTodoPress(item)}>
        <View style={styles.item}>
          <Text variant="body1" weight="medium" numberOfLines={1}>
            {firstTask.text}
          </Text>
          <View style={styles.itemFootnote}>
            <Text variant="subhead1" color="secondary">
              {moment(dateUpdated).format('MM.DD.YYYY, hh:mm A')}
            </Text>
            {secondTask && (
              <Text
                variant="footnote1"
                color="secondary"
                numberOfLines={1}
                style={styles.secondText}>
                {secondTask.text}
              </Text>
            )}
          </View>
        </View>
      </ListItem>
    );
  };

  render() {
    const { todos } = this.props;

    return (
      <>
        <BodyLayout>
          <FlatList
            data={todos}
            style={[styles.listContainer]}
            contentContainerStyle={styles.listContainer}
            renderItem={this.renderItem}
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
  selectTodoRequest: (payload: ITodoSelectRequestPayload) =>
    dispatch(TodoActions.selectRequest(payload))
});

export const HomeScreen = connect(mapStateToProps, mapDispatchToProps)(Home);
