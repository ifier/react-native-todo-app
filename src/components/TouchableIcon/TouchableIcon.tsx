import React from 'react';
import { TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import { styles } from './styles';

interface IProps {
  icon: string;
  color?: 'primary' | 'error';
  disabled?: boolean;
  onPress: () => void;
}

export const TouchableIcon = (props: IProps) => {
  const { icon, onPress, color = 'primary', disabled = false } = props;

  return (
    <TouchableOpacity
      style={styles.touchableIcon}
      onPress={onPress}
      disabled={disabled}>
      <Icon
        name={icon}
        size={28}
        style={[styles.icon, styles[color], disabled && styles.disabled]}
      />
    </TouchableOpacity>
  );
};
