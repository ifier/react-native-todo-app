import { persistStore } from 'redux-persist';

import { setHomeScreenAsRoot } from '~navigation';
import registerScreens from '~navigation/registerScreens';
import { setDefaultNavigationOptions } from '~navigation/setDefaultOptions';
import { configureStore } from '~store/initializeStore';

const store = configureStore();
registerScreens(store);

export const initApp = async () => {
  await setDefaultNavigationOptions();

  // @ts-ignore
  persistStore(store, null, async () => {
    setHomeScreenAsRoot();
  });
  // setHomeScreenAsRoot();
};
