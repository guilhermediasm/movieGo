import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { NavigationContainerRef } from '@react-navigation/core';
import { ToastMessage } from '~/modules';
import '~/utils/config/reactotron';
import { colors } from '~/theme';
import { Navigation, NavigationActions } from './navigation';

import { store } from './stores/store';

ToastMessage.setColorTheme({
  success: colors.success.main,
  info: colors.info.main,
  warning: colors.warning.main,
  danger: colors.failure.main,
});

export default class App extends Component {
  render(): JSX.Element {
    return (
      <Provider store={store}>
        <Navigation
          setNavigationTop={(navigatorRef: NavigationContainerRef<any>): void =>
            NavigationActions.setTopLevelNavigator(navigatorRef)
          }
        />
        <ToastMessage position="top" />
      </Provider>
    );
  }
}
