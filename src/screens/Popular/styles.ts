import { FlatList } from 'react-native';
import styled from 'styled-components/native';
import { CardMovie, ScreenWrapper, Typography } from '~/components';
import { spacings } from '~/theme';

export const Wrapper = styled(ScreenWrapper)``;

export const ListMovies = styled(FlatList as new () => FlatList<MOVIES>)``;

export const Title = styled(Typography)`
  color: blue;
`;

export const Card = styled(CardMovie)`
  margin-top: ${spacings.largeSpacing}px;
`;
