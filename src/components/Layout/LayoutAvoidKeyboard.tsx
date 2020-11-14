import React from 'react';
import { KeyboardAvoidingView, Platform } from 'react-native';

import { styles } from './styles';

interface IProps {
  children: React.ReactNode;
  style?: any;
}

export class LayoutAvoidKeyboard extends React.PureComponent<IProps> {
  render() {
    const { children, style } = this.props;

    return (
      <KeyboardAvoidingView
        behavior={Platform.select({ android: 'height', ios: 'padding' })}
        style={[styles.container, style]}>
        {children}
      </KeyboardAvoidingView>
    );
  }
}
