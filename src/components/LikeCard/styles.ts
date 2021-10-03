import styled from 'styled-components/native';
import { FastImage } from '~/modules';
import { colors, spacings } from '~/theme';
import { getShadow } from '~/utils';
import Touchable from '../Touchable';
import Typography from '../Typography';

export const Wrapper = styled.View`
  flex-direction: row;
  margin-top: ${spacings.screenSpacing}px;
`;

export const Image = styled(FastImage)`
  width: 80px;
  border-radius: 15px;
  ${getShadow()}
`;

export const Container = styled.View`
  width: 60%;
`;
export const Title = styled(Typography)`
  font-weight: bold;
  font-size: 14px;
`;

export const GenreMovie = styled(Typography)`
  color: ${colors.textSegundary};
  font-size: 12px;
  margin-top: -${spacings.minimumSpacing}px;
`;

export const TouchableRemove = styled(Touchable)`
  align-self: center;
  margin-left: ${spacings.largeSpacing}px;
`;
