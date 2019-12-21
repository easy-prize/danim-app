import { createAppContainer } from '@react-navigation/native';
import { AppRegistry } from 'react-native';
import { createStackNavigator } from 'react-navigation-stack';

import { name as appName } from './app.json';
import {
  BasketScreen,
  FeedScreen,
  HomeScreen,
  InfoScreen,
  JoinScreen,
  LoginScreen,
} from './screens';

const AppNavigator = createStackNavigator(
  {
    Basket: BasketScreen,
    Feed: FeedScreen,
    Home: HomeScreen,
    Info: InfoScreen,
    Join: JoinScreen,
    Login: LoginScreen,
  },
  {
    defaultNavigationOptions: {
      header: null,
    },
    initialRouteName: 'Login',
  },
);

const App = createAppContainer(AppNavigator);
AppRegistry.registerComponent(appName, () => App);
