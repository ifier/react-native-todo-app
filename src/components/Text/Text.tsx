import React from 'react';
import { Text } from 'react-native';

import { ITextProps } from './types';

import { styles } from './styles';

export const ImpossibleText = React.memo<ITextProps>((props: ITextProps) => {
  const {
    children,
    variant = 'body1',
    color = 'primary',
    weight = 'normal',
    style,
    ...rest
  } = props;

  return (
    <Text
      {...rest}
      style={[styles[variant], styles[weight], styles[color], style]}>
      {children}
    </Text>
  );
});
