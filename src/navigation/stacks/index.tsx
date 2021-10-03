import React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import {
  TransitionPresets,
  createStackNavigator,
} from '@react-navigation/stack';
import { MyTabBar } from '~/components';
import {
  DetailMovieScreen,
  HomeScreen,
  LikeScreen,
  PopularScreen,
  ShoppingScreen,
  SplashScreen,
} from '~/screens';
import {
  ModalsStackParams,
  SettingsStackParams,
  TopTabStackParams,
} from '~/utils/types';
import { Routes } from '../routes';

const Settings = createStackNavigator<SettingsStackParams>();
const Tab = createMaterialTopTabNavigator<TopTabStackParams>();
const Modals = createStackNavigator<ModalsStackParams>();

export const SettingsStack = (): JSX.Element => (
  <Settings.Navigator
    initialRouteName={Routes.SPLASH}
    screenOptions={{
      headerShown: false,
      gestureEnabled: false,
      ...TransitionPresets.SlideFromRightIOS,
    }}
  >
    <Settings.Screen name={Routes.SPLASH} component={SplashScreen} />
  </Settings.Navigator>
);

export const InitialRouteStack = (): JSX.Element => (
  <Tab.Navigator
    initialRouteName={Routes.HOME}
    tabBar={(props: any) => <MyTabBar topTabBarPorps={props} />}
  >
    <Tab.Screen
      name={Routes.HOME}
      component={HomeScreen}
      options={{ tabBarLabel: 'Filmes' }}
    />
    <Tab.Screen
      name={Routes.POPULAR}
      component={PopularScreen}
      options={{ tabBarLabel: 'Popular' }}
    />
    <Tab.Screen
      name={Routes.LIKE}
      component={LikeScreen}
      options={{ tabBarLabel: 'Gostei' }}
    />
  </Tab.Navigator>
);

export const ModalsStack = (): JSX.Element => (
  <Modals.Navigator
    screenOptions={{ presentation: 'modal', headerShown: false }}
  >
    <Modals.Screen name={Routes.DETAIL_MODAL} component={DetailMovieScreen} />
    <Modals.Screen name={Routes.SHOPPING} component={ShoppingScreen} />
  </Modals.Navigator>
);
