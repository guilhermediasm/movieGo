import styled from 'styled-components/native';
import { spacings } from '~/theme';
import Touchable from '../Touchable';
import Typography from '../Typography';

export const TabBarWrapper = styled.View`
  margin-top: ${spacings.statusBarSpacing}px;
`;
export const Wrapper = styled.View`
  flex-direction: row;
  margin-top: ${spacings.mediumSpacing}px;
  padding-bottom: ${spacings.minimumSpacing}px;
`;

export const TouchableLabel = styled(Touchable)`
  flex: 1;
`;

type LabelTitleType = {
  color: string;
};
export const LabelTitle = styled(Typography)<LabelTitleType>`
  color: ${({ color }) => color};
  text-align: center;
  font-weight: bold;
`;

export const Container = styled.View`
  padding-horizontal: 7%;
`;

export const Title = styled(Typography)`
  font-family: 'Roboto Black Italic';
  font-size: 30px;
  padding: 10px;
`;
