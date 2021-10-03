import styled from 'styled-components/native';
import { colors } from '~/theme';
import Touchable from '../Touchable';
import Typography from '../Typography';

export const Wrapper = styled(Touchable)`
  justify-content: center;
  align-items: center;
  background-color: ${(props) =>
    !props.disabled ? colors.secondary.main : '#c3c3c3'};
  width: 100%;
  height: 50px;
  border-radius: 8px;
`;

export const Text = styled(Typography)`
  color: ${colors.primary.contrast};
`;
