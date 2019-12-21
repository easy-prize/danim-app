import { createAppContainer } from '@react-navigation/native';
import { AppRegistry } from 'react-native';
import { createStackNavigator } from 'react-navigation-stack';

import { name as appName } from './app.json';
import { HomeScreen } from './screens';

const AppNavigator = createStackNavigator(
  {
    Home: {
      screen: HomeScreen,
    },
  },
  {
    initialRouteName: 'Home',
  },
);

const App = createAppContainer(AppNavigator);
AppRegistry.registerComponent(appName, () => App);
