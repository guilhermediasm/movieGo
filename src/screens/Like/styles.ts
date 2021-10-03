import { FlatList } from 'react-native';
import styled from 'styled-components/native';
import { LikeCard, ScreenWrapper, Typography } from '~/components';
import { colors, spacings } from '~/theme';

export const Wrapper = styled(ScreenWrapper)``;
export const Card = styled(LikeCard)``;

export const ListShopBuyMovie = styled(
  FlatList as new () => FlatList<AddLikeMovieParams>,
)``;

export const Container = styled.View`
  margin-top: 60%;
`;
export const Ops = styled(Typography)`
  font-family: 'Roboto Bold';
  font-size: 20px;
  text-align: center;
`;
export const TextOps = styled(Typography)`
  margin-top: ${spacings.mediumSpacing}px;
  color: ${colors.textSegundary};
`;
