import React from 'react';
import { TouchableOpacity } from 'react-native';
import { ScreenFC } from 'react-native-navigation-register-screens/dist/types';

import { Text } from '~components/Text';

import { TopBarButtons } from '~navigation/Screens';

interface IProps {
  onPress: () => void;
}

const TopBarCloseModalButton: ScreenFC<IProps> = ({ onPress }: IProps) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <Text variant="subhead1" color="error">
        Cancel
      </Text>
    </TouchableOpacity>
  );
};

TopBarCloseModalButton.screenName = TopBarButtons.CLOSE_MODAL;

export { TopBarCloseModalButton };
