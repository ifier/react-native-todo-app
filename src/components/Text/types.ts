import React from 'react';
import { StyleProp, TextProps, TextStyle } from 'react-native';

export type TextVariants =
  | 'title1'
  | 'title2'
  | 'title3'
  | 'headline1'
  | 'body1'
  | 'subhead1'
  | 'footnote1';

export type TextWeight = 'normal' | 'medium' | 'bold';

export type TextColor =
  | 'primary'
  | 'primaryLight'
  | 'secondary'
  | 'white'
  | 'link'
  | 'error';

export interface ITextProps extends TextProps {
  children: React.ReactNode;
  color?: TextColor;
  style?: StyleProp<TextStyle>;
  variant?: TextVariants;
  weight?: TextWeight;
}
