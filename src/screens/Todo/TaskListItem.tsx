import React from 'react';
import moment from 'moment';
import { RectButton } from 'react-native-gesture-handler';
import { Animated, View } from 'react-native';
import CheckBox from '@react-native-community/checkbox';
import Swipeable from 'react-native-gesture-handler/Swipeable';

import { Text } from '~components/Text';
import { ListItem } from '~components/ListItem';

import { ITask } from '~store/tasks/types';

import { styles } from './styles';
import { theme } from '../../assets/theme';

interface IProps {
  task: ITask;
  onDeletePress: (task: ITask) => void;
  onCheckboxPress: (task: ITask) => (isCompleted: boolean) => void;
}

export class TaskListItem extends React.Component<IProps> {
  private animationValue: Animated.Value = new Animated.Value(1);

  onDeletePress = () => {
    const { onDeletePress, task } = this.props;

    Animated.timing(this.animationValue, {
      toValue: 0,
      duration: 300,
      useNativeDriver: false
    }).start(() => {
      onDeletePress(task);
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
    const { task, onCheckboxPress } = this.props;
    const { text, dueDate, isCompleted } = task;
    const isOverdue = moment(dueDate).unix() <= moment().unix();

    return (
      <Animated.View style={{ opacity: this.animationValue }}>
        <Swipeable renderRightActions={this.renderLeftActions}>
          <ListItem style={styles.listItem}>
            <View style={styles.item}>
              <CheckBox
                onCheckColor={theme.palette.primary.main}
                onTintColor={theme.palette.primary.main}
                style={styles.checkbox}
                value={isCompleted}
                onValueChange={onCheckboxPress(task)}
              />
              <Text
                style={[
                  styles.taskText,
                  isCompleted && styles.taskTextCompleted
                ]}>
                {text}
              </Text>
            </View>
            <Text
              variant="footnote1"
              color={isOverdue ? 'error' : 'primaryLight'}
              style={[isCompleted && styles.taskTextCompleted]}>
              Due to: {moment(dueDate).format('DD MMM YYYY, hh:mm A')}
            </Text>
          </ListItem>
        </Swipeable>
      </Animated.View>
    );
  }
}
