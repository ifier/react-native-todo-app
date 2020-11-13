import { StyleSheet } from 'react-native';

import { theme } from '../../assets/theme';

import { ButtonIntensity } from './types';

export const makeStyles = (intensity: ButtonIntensity) =>
  StyleSheet.create({
    animatedView: {
      width: '100%'
    },
    button: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
      minHeight: theme.spacing(5.5),
      padding: theme.spacing(),
      borderRadius: theme.shape.borderRadius
    },
    loadingIndicator: {
      marginRight: theme.spacing()
    },
    // Variants
    contained: {},
    outlined: {
      backgroundColor: 'transparent',
      borderWidth: 1
    },
    disabled: {
      color: theme.palette.white.main,
      backgroundColor: '#8A97D0',
      borderColor: '#8A97D0'
    },
    // Colors
    default: {
      color: theme.palette.grey.A200,
      backgroundColor: theme.palette.grey.A200,
      borderColor: theme.palette.grey.A200
    },
    primary: {
      color: theme.palette.primary[intensity],
      backgroundColor: theme.palette.primary[intensity],
      borderColor: theme.palette.primary[intensity]
    },
    secondary: {
      color: theme.palette.secondary[intensity],
      backgroundColor: theme.palette.secondary[intensity],
      borderColor: theme.palette.secondary[intensity]
    },
    success: {
      color: theme.palette.success[intensity],
      backgroundColor: theme.palette.success[intensity],
      borderColor: theme.palette.success[intensity]
    },
    warning: {
      color: theme.palette.warning[intensity],
      backgroundColor: theme.palette.warning[intensity],
      borderColor: theme.palette.warning[intensity]
    },
    error: {
      color: theme.palette.error[intensity],
      backgroundColor: theme.palette.error[intensity],
      borderColor: theme.palette.error[intensity]
    },
    white: {
      color: theme.palette.white[intensity],
      backgroundColor: theme.palette.white[intensity],
      borderColor: theme.palette.white[intensity]
    },
    // Icons colors
    icon: {
      marginRight: theme.spacing()
    }
  });
