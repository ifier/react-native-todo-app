import React from 'react';
import moment from 'moment';
import { Animated, View } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';
import Swipeable from 'react-native-gesture-handler/Swipeable';

import { Text } from '~components/Text';
import { ListItem } from '~components/ListItem';

import { ITodo } from '~store/todos/types';

import { styles } from './styles';

interface IProps {
  todo: ITodo;
  onPress: (todo: ITodo) => () => void;
  onDeletePress: (todo: ITodo) => void;
}

export class TodoListItem extends React.Component<IProps> {
  private animationValue: Animated.Value = new Animated.Value(1);

  onDeletePress = () => {
    const { onDeletePress, todo } = this.props;

    Animated.timing(this.animationValue, {
      toValue: 0,
      duration: 300,
      useNativeDriver: false
    }).start(() => {
      onDeletePress(todo);
    });
  };

  renderLeftActions = () => {
    return (
      <RectButton style={styles.leftAction} onPress={this.onDeletePress}>
        <Text variant="subhead1" color="white">
          Delete
        </Text>
      </RectButton>
    );
  };

  render() {
    const { todo, onPress } = this.props;
    const { tasks, dateUpdated } = todo;

    if (!tasks || !tasks.length) return null;

    const [firstTask, secondTask] = tasks;
    return (
      <Animated.View style={{ opacity: this.animationValue }}>
        <Swipeable renderRightActions={this.renderLeftActions}>
          <ListItem onPress={onPress(todo)}>
            <View style={styles.item}>
              <Text variant="body1" weight="medium" numberOfLines={1}>
                {firstTask.text}
              </Text>
              <View style={styles.itemFootnote}>
                <Text variant="footnote1" color="secondary">
                  {moment(dateUpdated).fromNow()}
                </Text>
                {secondTask && (
                  <Text
                    variant="subhead1"
                    color="secondary"
                    numberOfLines={1}
                    style={styles.secondText}>
                    {secondTask.text}
                  </Text>
                )}
              </View>
            </View>
          </ListItem>
        </Swipeable>
      </Animated.View>
    );
  }
}
