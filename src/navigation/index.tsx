import React from 'react';

import {
  NavigationContainer,
  NavigationContainerRef,
  useFocusEffect,
  useNavigation,
  useRoute,
} from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { colors } from '~/theme';
import * as NavigationActions from './actions';
import { Routes, Stacks } from './routes';
import { InitialRouteStack, ModalsStack, SettingsStack } from './stacks';

const MainStack = createStackNavigator();

type Props = {
  setNavigationTop?: (navigatorRef: NavigationContainerRef<any>) => void;
};

export const Navigation: React.FC<Props> = ({ setNavigationTop }) => {
  const contextTheme = {
    dark: false,
    colors: {
      primary: colors.primary.main,
      background: 'transparent',
      card: colors.tertiary.contrast,
      text: colors.primary.contrast,
      border: colors.tertiary.contrast,
      notification: colors.primary.main,
    },
  };

  return (
    <NavigationContainer ref={setNavigationTop} theme={contextTheme}>
      <MainStack.Navigator
        screenOptions={{ headerShown: false }}
        initialRouteName={Stacks.SETTINGS}
      >
        <MainStack.Screen name={Stacks.SETTINGS} component={SettingsStack} />
        <MainStack.Screen name={Stacks.PUBLIC} component={InitialRouteStack} />
        <MainStack.Screen name={Stacks.MODAL} component={ModalsStack} />
      </MainStack.Navigator>
    </NavigationContainer>
  );
};

export {
  Stacks,
  Routes,
  NavigationActions,
  useNavigation,
  useRoute,
  useFocusEffect,
};
