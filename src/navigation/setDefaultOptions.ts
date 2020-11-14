import { Navigation } from 'react-native-navigation';

import { theme } from '../assets/theme';

export const setDefaultNavigationOptions = async () => {
  Navigation.setDefaultOptions({
    topBar: {
      title: {
        color: theme.palette.black.main
      },
      background: {
        color: theme.palette.background.default
      },
      backButton: {
        title: '', // Remove previous screen name from back button
        showTitle: false,
        color: theme.palette.primary.main
      },
      drawBehind: true,
      noBorder: false
    },
    layout: {
      orientation: ['portrait'],
      backgroundColor: theme.palette.background.default,
      componentBackgroundColor: theme.palette.background.default
    },
    animations: {
      setRoot: {
        alpha: {
          from: 0,
          to: 1,
          duration: 400,
          startDelay: 100,
          interpolation: {
            type: 'accelerate'
          }
        }
      }
    }
  });
};
