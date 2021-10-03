import {
  CommonActions,
  NavigationAction,
  NavigationContainerRef,
  StackActions,
} from '@react-navigation/native';

type RouteParams = Record<string, any>;

let navigator: NavigationContainerRef<any>;

export function setTopLevelNavigator(
  navigatorRef: NavigationContainerRef<any>,
): void {
  navigator = navigatorRef;
}

export function dispatch(fn: NavigationAction): void {
  navigator.dispatch(fn);
}

export function resetRouteToTop(
  routeName: string,
  params?: Record<string, any>,
): void {
  navigator.resetRoot({
    index: 0,
    routes: [
      {
        name: routeName,
        params,
      },
    ],
  });
}

export function navigate(routeName: string, params?: RouteParams): void {
  navigator.dispatch(
    CommonActions.navigate({
      name: routeName,
      params,
    }),
  );
}

export function goBack(): void {
  navigator.dispatch(CommonActions.goBack());
}

export function replace(name: string, params?: RouteParams): void {
  navigator.dispatch(StackActions.replace(name, params));
}
