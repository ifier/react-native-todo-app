import React from 'react';
import { SafeAreaView, View } from 'react-native';

import { styles } from './styles';
import { Divider } from '~components/Divider';

interface IProps {
  children: React.ReactNode;
}

export const FooterLayout = (props: IProps) => {
  const { children } = props;

  return (
    <SafeAreaView>
      <Divider />
      <View style={styles.footer}>{children}</View>
    </SafeAreaView>
  );
};
