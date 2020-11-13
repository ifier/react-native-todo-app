import React from 'react';
import {
  ActivityIndicator,
  Animated,
  TouchableOpacity,
  View
} from 'react-native';

import { Text } from '../Text';
import { IButtonProps } from './types';

import { theme } from '../../assets/theme';
import { makeStyles } from './styles';

type IState = {
  elevation: Animated.Value;
};

export class ImpossibleButton extends React.Component<IButtonProps, IState> {
  private animationValue: Animated.Value = new Animated.Value(1);

  onPressIn = () => {
    Animated.timing(this.animationValue, {
      toValue: 0.9,
      duration: 300,
      useNativeDriver: true
    }).start();
  };

  onPressOut = () => {
    Animated.timing(this.animationValue, {
      toValue: 1,
      duration: 300,
      useNativeDriver: true
    }).start();
  };

  getButtonTextColor = (styles: any) => {
    const { color = 'primary', variant, disabled } = this.props;
    let textColorStyle = { color: styles[color].color };

    if (variant === 'contained') {
      textColorStyle = { color: theme.palette[color].contrastText };
    }

    if (disabled) {
      textColorStyle = { color: styles.disabled.color };
    }

    return textColorStyle;
  };

  render() {
    const {
      children,
      color = 'primary',
      variant,
      loading = false,
      disabled = false,
      pressEventDisabled = false,
      onPress,
      style,
      startIcon,
      textStyle,
      intensity = 'main'
    } = this.props;
    const styles = makeStyles(intensity);

    const buttonTextColor = this.getButtonTextColor(styles);

    return (
      <Animated.View
        style={[
          styles.animatedView,
          { transform: [{ scale: this.animationValue }] }
        ]}>
        <TouchableOpacity
          activeOpacity={0.5}
          onPress={onPress}
          onPressIn={this.onPressIn}
          onPressOut={this.onPressOut}
          disabled={disabled || pressEventDisabled}
          style={[
            styles.button,
            styles[color],
            disabled && styles.disabled,
            styles[variant],
            style
          ]}>
          <>
            {loading && (
              <ActivityIndicator
                style={styles.loadingIndicator}
                color={buttonTextColor.color}
              />
            )}
            {startIcon && !loading && (
              <View style={[styles.icon]}>
                <Text style={[buttonTextColor]}>{startIcon}</Text>
              </View>
            )}
            <Text variant="body1" style={[buttonTextColor, textStyle]}>
              {children}
            </Text>
          </>
        </TouchableOpacity>
      </Animated.View>
    );
  }
}
