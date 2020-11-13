import { StyleSheet } from 'react-native';

import { theme } from '../../assets/theme';

export const styles = StyleSheet.create({
  safeArea: {
    flex: 1
  },
  container: {
    flex: 1
  },
  footer: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: theme.spacing(2),
    alignItems: 'center'
  }
});
