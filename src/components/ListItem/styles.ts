import { StyleSheet } from 'react-native';

import { theme } from '../../assets/theme';

export const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.palette.background.default,
    paddingLeft: theme.spacing(2)
  },
  iconContainer: {
    marginRight: theme.spacing(2)
  },
  content: {
    flex: 1,
    minHeight: theme.spacing(6),
    paddingVertical: theme.spacing(2),
    paddingRight: theme.spacing(2),
    flexDirection: 'row',
    alignItems: 'center'
  }
});
