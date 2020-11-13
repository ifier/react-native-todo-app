import React from 'react';
import { View } from 'react-native';

import { Text } from '~components/Text';

import { styles } from './styles';

interface IProps {
  title?: string;
  text?: string;
}

export const ListEmpty = (props: IProps) => {
  const { text, title } = props;
  const placeholder: string = 'No results';
  return (
    <View style={styles.emptyState}>
      <Text variant="body1" weight="medium" style={styles.text}>
        {title}
      </Text>
      <Text
        variant="subhead1"
        color="secondary"
        style={[styles.text, styles.emptyText]}>
        {text || placeholder}
      </Text>
    </View>
  );
};
