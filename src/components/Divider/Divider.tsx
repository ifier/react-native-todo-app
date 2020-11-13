import React from 'react';
import { View } from 'react-native';

import { styles } from './styles';

export const Divider = ({ style }: { style?: any }) => {
  return <View style={[styles.divider, style]} />;
};
