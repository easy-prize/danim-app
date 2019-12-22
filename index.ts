import { createAppContainer } from '@react-navigation/native';
import { AppRegistry } from 'react-native';
import { createStackNavigator } from 'react-navigation-stack';

import { name as appName } from './app.json';
import {
  HomeScreen,
  JoinScreen,
} from './screens';

const AppNavigator = createStackNavigator(
  {
    Home: HomeScreen,
    Join: JoinScreen,
  },
  {
    defaultNavigationOptions: {
      header: null,
    },
    initialRouteName: 'Join',
  },
);

const App = createAppContainer(AppNavigator);
AppRegistry.registerComponent(appName, () => App);
