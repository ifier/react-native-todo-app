import { StyleSheet } from 'react-native';
import { TextStyles } from '~components/Text/styles';

import { theme } from '../../assets/theme';

export const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  listContainer: {
    flexGrow: 1
  },
  listItem: {
    flexDirection: 'column',
    alignItems: 'flex-end'
  },
  item: {
    flexDirection: 'row',
    flex: 1,
    width: '100%',
    justifyContent: 'flex-start',
    marginBottom: theme.spacing(2)
  },
  checkbox: {
    marginRight: theme.spacing(2)
  },
  taskText: {
    flex: 1,
    marginTop: theme.spacing(0.5)
  },
  taskTextCompleted: {
    textDecorationLine: 'line-through',
    color: TextStyles.secondary.color
  },
  //
  leftAction: {
    backgroundColor: theme.palette.error.light,
    justifyContent: 'center',
    alignItems: 'flex-end',
    padding: theme.spacing(2)
  },
  actionText: {}
});
