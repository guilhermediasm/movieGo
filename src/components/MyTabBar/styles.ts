import styled from 'styled-components/native';
import { colors, spacings } from '~/theme';
import Touchable from '../Touchable';
import Typography from '../Typography';

const { smallSpacing } = spacings;

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
  flex-direction: row;
  align-items: center;
`;

export const Title = styled(Typography)`
  font-family: 'Roboto Black Italic';
  font-size: 30px;
  padding: 10px;
`;

export const Go = styled(Typography)`
  font-weight: bold;
  font-size: 35px;
  padding-top: ${smallSpacing}px;
  margin-left: -${spacings.smallerSpacing}px;
  color: ${colors.secondary.main};
`;

export const Header = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding-horizontal: 7%;
`;

export const TouchableIconShop = styled(Touchable)``;

export const CountBuyShop = styled(Typography)`
  color: ${colors.texts.contrast};
  font-size: 7px;
  margin-top: -4px;
  text-align: center;
`;

export const ViewCountBuyShop = styled.View`
  background-color: ${colors.secondary.main};
  border-radius: 500px;
  height: ${smallSpacing}px;
  width: ${smallSpacing}px;
  bottom: ${smallSpacing}px;
  right: ${smallSpacing}px;
  position: absolute;
  z-index: 2;
`;
