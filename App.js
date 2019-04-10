/**
 *
 * @format
 * @flow
 */

import React, { Component } from "react";
import { createStackNavigator, createAppContainer, createSwitchNavigator } from "react-navigation";

import LoginScreen from './src/LoginScreen';
import DashboardScreen from "./src/DashboardScreen";
import NewFormScreen from "./src/NewFormScreen";
import SignUpScreen from "./src/SignUpScreen";
import ProfileScreen from "./src/ProfileScreen";
import AuthLoadingScreen from "./AuthLoadingScreen";

const AppStack = createStackNavigator({ 
  Dashboard: DashboardScreen,
  NewForm: NewFormScreen,
  Profile: ProfileScreen });
const AuthStack = createStackNavigator({ SignIn: LoginScreen });

export default createAppContainer(createSwitchNavigator(
  {
    AuthLoading: AuthLoadingScreen,
    App: AppStack,
    Auth: AuthStack,
  },
  {
    initialRouteName: 'AuthLoading',
  }
));

// const AppNavigator = createStackNavigator(
  //   {
  //   Home: LoginScreen,
  //   Dashboard: DashboardScreen,
  //   NewForm: NewFormScreen,
  //   SignUp: SignUpScreen,
  //   Profile: ProfileScreen
  // },
  // {
  //   initialRouteName: 'Home'
  // }
  // );
  

// export default createAppContainer(AppNavigator);

