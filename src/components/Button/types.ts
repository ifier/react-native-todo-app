import React from 'react';

export type ButtonColor =
  | 'primary'
  | 'secondary'
  | 'warning'
  | 'success'
  | 'error'
  | 'white';

export type ButtonVariant = 'outlined' | 'contained';

export type ButtonIntensity = 'light' | 'dark' | 'main';

export interface IButtonProps {
  color: ButtonColor;
  variant: ButtonVariant;
  intensity?: ButtonIntensity;
  onPress: () => void;
  children: React.ReactNode | string;
  loading?: boolean;
  disabled?: boolean;
  pressEventDisabled?: boolean;
  style?: any;
  textStyle?: any;
  startIcon?: React.ReactNode;
}
