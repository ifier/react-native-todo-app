import { StyleSheet } from 'react-native';

import { theme } from '../../assets/theme';

export const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  listContainer: {
    flexGrow: 1
  },
  item: {
    flex: 1
  },
  itemFootnote: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  secondText: {
    flex: 1,
    marginLeft: theme.spacing()
  },
  touchableIcon: {
    width: theme.spacing(4),
    height: theme.spacing(4),
    justifyContent: 'center',
    alignItems: 'center'
  },
  leftAction: {
    backgroundColor: theme.palette.error.light,
    justifyContent: 'center',
    alignItems: 'flex-end',
    padding: theme.spacing(2)
  }
});
