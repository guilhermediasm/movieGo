import { FlatList } from 'react-native';
import styled from 'styled-components/native';
import { BuyCard, ScreenWrapper, Touchable, Typography } from '~/components';
import { colors, spacings } from '~/theme';

export const Wrapper = styled(ScreenWrapper)``;
export const CardBuy = styled(BuyCard)``;

export const ListShopBuyMovie = styled(
  FlatList as new () => FlatList<AddBuyMovieParams>,
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

export const BottomShpping = styled.View`
  align-items: center;
  margin-bottom: ${spacings.bottomSpacing}px;
`;
export const Total = styled(Typography)`
  font-weight: bold;
  text-align: center;
`;
export const ShopBuy = styled(Typography)`
  font-size: 18px;
  margin-top: ${spacings.minimumSpacing}px;
  color: ${colors.secondary.main};
`;

export const GolBack = styled(Touchable)`
  flex-direction: row;
`;

export const CarrinhoText = styled(Typography)`
  font-weight: bold;
  margin-left: 35%;
  font-size: 20px;
`;
