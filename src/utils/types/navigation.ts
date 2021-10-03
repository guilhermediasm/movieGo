import { RouteProp } from '@react-navigation/native';
import { Routes } from '~/navigation';

export type TopTabStackParams = {
  [Routes.HOME]: undefined;
  [Routes.POPULAR]: undefined;
  [Routes.SHOPPING]: undefined;
};

export type SettingsStackParams = {
  [Routes.SPLASH]: undefined;
};

export type ModalsStackParams = {
  [Routes.DETAIL_MODAL]: { idMovie: number };
};

export type DetailsMovieModalScreenParams = RouteProp<
  ModalsStackParams,
  Routes.DETAIL_MODAL
>;
