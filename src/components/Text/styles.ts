import { StyleSheet } from 'react-native';
import { theme, fontSizes } from '../../assets/theme';

export const styles = StyleSheet.create({
  title1: {
    fontSize: fontSizes.TITLE_1,
    lineHeight: 40
  },
  title2: {
    fontSize: fontSizes.TITLE_2,
    lineHeight: 31
  },
  title3: {
    fontSize: fontSizes.TITLE_3,
    lineHeight: 28
  },
  headline1: {
    fontSize: fontSizes.HEADLINE_1,
    lineHeight: 24,
    fontWeight: '500'
  },
  body1: {
    fontSize: fontSizes.HEADLINE_1,
    lineHeight: 22
  },
  subhead1: {
    fontSize: fontSizes.SUBHEAD_1,
    lineHeight: 21,
    letterSpacing: -0.3
  },
  footnote1: {
    fontSize: fontSizes.FOOTNOTE_1,
    lineHeight: 18,
    letterSpacing: -0.3
  },
  // Weight
  normal: {
    fontWeight: 'normal'
  },
  medium: {
    fontWeight: '500'
  },
  bold: {
    fontWeight: 'bold'
  },
  primary: {
    color: theme.palette.black.main
  },
  primaryLight: {
    color: theme.palette.black.light
  },
  secondary: {
    color: theme.palette.grey.A700
  },
  link: {
    color: theme.palette.primary.main
  },
  white: {
    color: theme.palette.white.main
  },
  error: {
    color: theme.palette.error.main
  }
});

export { styles as TextStyles };
