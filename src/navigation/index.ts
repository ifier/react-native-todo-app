import { Navigation } from 'react-native-navigation';

import { Screens, TopBarButtons } from './Screens';

export interface IModalOptions {
  name: Screens;
  passProps?: {};
}

export const setHomeScreenAsRoot = async () => {
  await Navigation.setRoot({
    root: {
      stack: {
        children: [
          {
            component: {
              name: Screens.HOME
            }
          }
        ]
      }
    }
  });
};

export const showModal = ({ name, passProps }: IModalOptions) => {
  Navigation.showModal({
    stack: {
      children: [
        {
          component: {
            id: name,
            name,
            passProps,
            options: {
              topBar: {
                leftButtons: [
                  {
                    id: TopBarButtons.CLOSE_MODAL,
                    component: {
                      name: TopBarButtons.CLOSE_MODAL,
                      passProps: {
                        onPress: () => {
                          Navigation.dismissModal(name);
                        }
                      }
                    }
                  }
                ]
              }
            }
          }
        }
      ]
    }
  });
};
