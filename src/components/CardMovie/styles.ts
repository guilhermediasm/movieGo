import styled from 'styled-components/native';
import { colors, spacings } from '~/theme';
import { getShadow } from '~/utils';
import Touchable from '../Touchable';
import Typography from '../Typography';

export const Wrapper = styled.View`
  flex-direction: row;
`;

export const Image = styled.Image`
  width: 70px;
  border-radius: 15px;
  ${getShadow()}
`;

export const Container = styled.View`
  margin-left: ${spacings.smallSpacing}px;
`;
export const Title = styled(Typography)`
  font-weight: bold;
  font-size: 14px;
`;
export const OriginalTitle = styled(Typography)`
  font-size: 10px;
  margin-top: -${spacings.minimumSpacing}px;
`;
export const WrapperRating = styled.View`
  flex-direction: row;
`;
export const CountRating = styled(Typography)`
  margin-left: ${spacings.minimumSpacing}px;
  font-family: 'Roboto Light Italic';
  font-size: 10px;
`;
export const GenreMovie = styled(Typography)`
  color: ${colors.textSegundary};
  font-size: 12px;
  margin-top: ${spacings.minimumSpacing}px;
`;

export const TouchableMovie = styled(Touchable)``;
