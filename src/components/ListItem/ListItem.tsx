import React from 'react';
import { TouchableHighlight, View } from 'react-native';

import { Divider } from '~components/Divider';

import { theme } from '../../assets/theme';
import { styles } from './styles';

interface IProps {
  children: React.ReactNode;
  onPress?: () => void;
}

export const ListItem = (props: IProps) => {
  const { children, onPress } = props;

  return (
    <TouchableHighlight
      onPress={onPress}
      underlayColor={theme.palette.grey.A100}
      style={[styles.container]}>
      <>
        <View style={[styles.content]}>{children}</View>
        <Divider />
      </>
    </TouchableHighlight>
  );
};
