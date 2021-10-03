import { FlatList } from 'react-native';
import styled from 'styled-components/native';
import { CardMovie, ScreenWrapper } from '~/components';
import { spacings } from '~/theme';

export const Wrapper = styled(ScreenWrapper)``;

export const ListMovies = styled(FlatList as new () => FlatList<MOVIES>)``;

export const Card = styled(CardMovie)`
  margin-top: ${spacings.largeSpacing}px;
`;
