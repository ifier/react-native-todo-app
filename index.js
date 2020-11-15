import 'react-native-gesture-handler';
import { Navigation } from 'react-native-navigation';

import { initApp } from './src/App';

Navigation.events().registerAppLaunchedListener(() => initApp());
