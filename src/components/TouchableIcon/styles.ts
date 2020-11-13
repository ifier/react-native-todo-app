import { StyleSheet } from 'react-native';

import { theme } from '../../assets/theme';

export const styles = StyleSheet.create({
  touchableIcon: {
    width: theme.spacing(4),
    height: theme.spacing(4),
    marginHorizontal: theme.spacing(-0.5),
    justifyContent: 'center',
    alignItems: 'center'
  },
  icon: {},
  primary: {
    color: theme.palette.primary.main
  },
  error: {
    color: theme.palette.error.main
  },
  warning: {
    color: theme.palette.warning.main
  }
});
