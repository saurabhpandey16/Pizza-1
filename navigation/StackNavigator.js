import {createStackNavigator} from 'react-navigation-stack';
import {createSwitchNavigator} from 'react-navigation';

import {Welcome, Toppings} from '../screens';
import {DrawerNavigator} from './DrawerNavigator';
import {COLORS} from '../constants/constants';

const WelcomeStackNavigator = createStackNavigator(
  {
    Welcome: Welcome,
  },
  {
    mode: 'modal',
    initialRouteName: 'Welcome',
    defaultNavigationOptions: {
      headerTintColor: COLORS.textSecondaryColor,
      headerStyle: {
        backgroundColor: COLORS.primaryColor,
      },
    },
  },
);

const MainNavigator = createSwitchNavigator({
  Toppings: Toppings,
  Welcome: WelcomeStackNavigator,
  Drawer: DrawerNavigator,
});

export {MainNavigator};
