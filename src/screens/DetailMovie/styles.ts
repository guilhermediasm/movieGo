import styled from 'styled-components/native';
import {
  Button,
  CampMovieDetail,
  ScreenWrapper,
  Touchable,
  Typography,
} from '~/components';
import { colors, spacings } from '~/theme';
import { getShadow } from '~/utils';

export const Wrapper = styled(ScreenWrapper)``;

export const ContainerDetailMovie = styled.View`
  margin-left: ${spacings.normalSpacing}px;
`;
export const ContainerMovie = styled.View`
  flex-direction: row;
  margin-top: ${spacings.mediumSpacing}px;
`;

export const GolBack = styled(Touchable)``;

export const Title = styled(Typography)`
  font-weight: bold;
  font-size: 14px;
`;

export const Image = styled.Image`
  width: 70px;
  height: 100px;
  border-radius: 15px;
  ${getShadow()}
`;

export const WrapperRating = styled.View`
  flex-direction: row;
  margin-top: -${spacings.minimumSpacing}px;
  align-items: center;
`;
export const CountRating = styled(Typography)`
  margin-left: ${spacings.minimumSpacing}px;
  font-family: 'Roboto Light Italic';
  font-size: 10px;
`;
export const GenreMovie = styled(Typography)`
  color: ${colors.textSegundary};
  font-size: 12px;
  margin-top: -2px;
`;

export const DurationMovie = styled(Typography)`
  color: ${colors.textSegundary};
  font-size: 13px;
`;
export const InfoMovie = styled.View`
  flex-direction: row;
  justify-content: space-between;
  margin-top: ${spacings.mediumSpacing}px;
`;

export const Language = styled(CampMovieDetail)``;
export const Comments = styled(CampMovieDetail)`
  border-left-width: 1px;
  border-right-width: 1px;
  padding-horizontal: 20px;
  border-color: ${colors.textSegundary};
`;
export const Collection = styled(CampMovieDetail)``;

export const Synopsi = styled.View`
  margin-top: ${spacings.largeSpacing}px;
`;
export const TitleSynopsi = styled(Typography)`
  margin-bottom: ${spacings.mediumSpacing}px;
  font-weight: bold;
  font-size: 16px;
`;
export const TextSynopsi = styled(Typography)`
  color: ${colors.textSegundary};
`;

export const BuyNowButton = styled(Button)`
  width: 110px;
`;

export const BottomScreenBuy = styled.View`
  flex-direction: row;
  justify-content: space-between;
  padding-left: ${spacings.moderateSpacing}px;
  width: 100%;
  position: absolute;
  bottom: ${spacings.moderateSpacing}px;
`;

export const PriceBuyMovie = styled.View`
  align-items: center;
`;
export const Price = styled(Typography)`
  font-weight: bold;
`;
export const PriceBuy = styled(Typography)`
  color: ${colors.secondary.main};
  font-size: 18px;
`;
