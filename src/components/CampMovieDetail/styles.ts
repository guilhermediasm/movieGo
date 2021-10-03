import styled from 'styled-components/native';
import { colors } from '~/theme';
import Typography from '../Typography';

export const Wrapper = styled.View`
  justify-content: center;
`;

export const Text = styled(Typography)`
  color: ${colors.primary.contrast};
`;

export const Title = styled(Typography)`
  color: ${colors.textSegundary};
  font-family: 'Roboto Bold';
  font-size: 12px;
`;
export const Infomation = styled(Typography)`
  color: ${colors.text};
  font-family: 'Roboto Bold';
  font-size: 14px;
`;
