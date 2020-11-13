import React from 'react';
import { SafeAreaView, StatusBar, View } from 'react-native';

import { styles } from './styles';

interface IProps {
  children: React.ReactNode;
  style?: any;
}

class BodyLayout extends React.PureComponent<IProps> {
  render() {
    const { children, style } = this.props;

    return (
      <>
        <StatusBar barStyle="dark-content" />
        <SafeAreaView style={[styles.safeArea, style]}>
          <View style={styles.container}>{children}</View>
        </SafeAreaView>
      </>
    );
  }
}

export { BodyLayout };
