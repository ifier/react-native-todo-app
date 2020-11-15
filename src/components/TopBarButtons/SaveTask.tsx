import React from 'react';
import { TouchableOpacity } from 'react-native';
import { ScreenFC } from 'react-native-navigation-register-screens/dist/types';

import { Text } from '~components/Text';

import { TopBarButtons } from '~navigation/Screens';

interface IProps {
  onPress: () => void;
}

const TopBarSaveTaskButton: ScreenFC<IProps> = (props: IProps) => {
  const { onPress } = props;

  return (
    <TouchableOpacity onPress={onPress}>
      <Text variant="subhead1" color="link">
        Save
      </Text>
    </TouchableOpacity>
  );
};

TopBarSaveTaskButton.screenName = TopBarButtons.SAVE_TASK;

export { TopBarSaveTaskButton };
