import { StyleSheet } from 'react-native';

import { theme } from '../../assets/theme';

export const styles = StyleSheet.create({
  emptyState: {
    backgroundColor: theme.palette.background.default,
    paddingHorizontal: theme.spacing(2),
    paddingBottom: theme.spacing(3),
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1
  },
  text: {
    textAlign: 'center'
  },
  emptyText: {
    maxWidth: 250,
    marginTop: theme.spacing(0.5)
  }
});
