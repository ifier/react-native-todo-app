import React from 'react';
import { Provider } from 'react-redux';
import { registerScreens } from 'react-native-navigation-register-screens';

import {
  TopBarAddTodoButton,
  TopBarCloseModalButton,
  TopBarSaveTaskButton
} from '~components/TopBarButtons';

import { AddTaskScreen, HomeScreen, TodoScreen } from '../screens';

export default (store: any) => {
  registerScreens(
    [
      HomeScreen,
      TodoScreen,
      AddTaskScreen,

      TopBarAddTodoButton,
      TopBarSaveTaskButton,
      TopBarCloseModalButton
    ],
    (Component: any) => (props: any) => {
      return (
        <Provider store={store}>
          <Component {...props} />
        </Provider>
      );
    }
  );
};
