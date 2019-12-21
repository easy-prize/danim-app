import { AppRegistry } from 'react-native';
import { HomeScreen } from './screens';
import { createAppContainer } from '@react-navigation/native';
import { createStackNavigator } from 'react-navigation-stack';
import { name as appName } from './app.json';

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
