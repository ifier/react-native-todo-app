import React, { useCallback } from 'react';
import { ScreenFC } from 'react-native-navigation-register-screens/dist/types';

import { TouchableIcon } from '~components/TouchableIcon';

import { showModal } from '~navigation';
import { Screens, TopBarButtons } from '~navigation/Screens';

interface IProps {
  componentId: string;
}

const TopBarAddTodoButton: ScreenFC<IProps> = () => {
  const onPress = useCallback(() => {
    showModal({ name: Screens.ADD_TASK });
  }, []);

  return <TouchableIcon icon="plus-circle-outline" onPress={onPress} />;
};

TopBarAddTodoButton.screenName = TopBarButtons.ADD_TASK;

export { TopBarAddTodoButton };
