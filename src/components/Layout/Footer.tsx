import React from 'react';
import { View } from 'react-native';

import { styles } from './styles';
import { Divider } from '~components/Divider';

interface IProps {
  children: React.ReactNode;
}

export const FooterLayout = (props: IProps) => {
  const { children } = props;

  return (
    <View style={styles.footerContainer}>
      <Divider />
      <View style={styles.footer}>{children}</View>
    </View>
  );
};
