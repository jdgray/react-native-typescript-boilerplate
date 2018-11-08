import React from "react";
import { Icon } from "react-native-elements";
import {
  createStackNavigator,
  createBottomTabNavigator
} from "react-navigation";
import LoginPage from '../pages/Login';
import HomePage from '../pages/Home';


export const Tabs = createBottomTabNavigator(
  {
    Home: {
      screen: HomePage,
      navigationOptions: {
        tabBarLabel: "Home",
        tabBarIcon: (options: any) => (
          <Icon name="home" size={30} color={options.tintColor} />
        )
      }
    },
    Login: {
      screen: LoginPage,
      navigationOptions: {
        tabBarLabel: "Login",
        tabBarIcon: (options: any) => (
          <Icon name="person" size={30} color={options.tintColor} />
        )
      }
    }
  },
  {
    tabBarOptions: {
      style: { height: 60 },
      showLabel: false,
      activeTintColor: "#476478",
      inactiveTintColor: "#BBBDBF"
    }
  }
);

export const RootNavigator = createStackNavigator({
  Main: {
    screen: Tabs,
    navigationOptions: {
      title: "Main",
      header: null,
      headerLeft: null,
      gesturesEnabled: false
    }
  }
});
