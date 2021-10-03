import { Platform } from 'react-native';
import styled from 'styled-components/native';
import { spacings } from '~/theme';

export const Wrapper = styled.View`
  flex: 1;
  padding-horizontal: ${spacings.screenSpacing}px;
  padding-bottom: ${spacings.bottomSpacing}px;
  background-color: #fff;
  padding-top: ${Platform.OS === 'android'
    ? spacings.screenSpacing
    : spacings.statusBarSpacing}px;
`;
