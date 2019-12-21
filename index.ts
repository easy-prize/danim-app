import { createAppContainer } from '@react-navigation/native';
import { AppRegistry } from 'react-native';
import { createStackNavigator } from 'react-navigation-stack';

import { name as appName } from './app.json';
import {
  BasketScreen,
  FeedScreen,
  HomeScreen,
  JoinScreen,
} from './screens';

const AppNavigator = createStackNavigator(
  {
    Basket: BasketScreen,
    Feed: FeedScreen,
    Home: HomeScreen,
    Join: JoinScreen,
  },
  {
    defaultNavigationOptions: {
      header: null,
    },
    initialRouteName: 'Feed',
  },
);

const App = createAppContainer(AppNavigator);
AppRegistry.registerComponent(appName, () => App);
