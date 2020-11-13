import { StyleSheet } from 'react-native';

import { TextStyles } from '~components/Text/styles';
import { theme } from '../../assets/theme';

export const styles = StyleSheet.create({
  textInput: {
    ...TextStyles.subhead1,
    width: '100%',
    paddingVertical: theme.spacing()
  },
  datePickerContainer: {
    flex: 1
  },
  datePickerHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  }
});
