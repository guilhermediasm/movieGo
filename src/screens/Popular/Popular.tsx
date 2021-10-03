import React, { FC } from 'react';
import { getTextGenere } from '~/utils';

import { Card, ListMovies, Wrapper } from './styles';

type Props = {
  movies: MOVIES[];
  genere: GenereMovie[];
  refresh(): void;
  isOnRefresh: boolean;
  onEndReached(): void;
  onNavigate(idMovie: number): void;
};

const Popular: FC<Props> = ({
  movies,
  genere,
  refresh,
  isOnRefresh,
  onEndReached,
  onNavigate,
}) => (
  <Wrapper>
    <ListMovies
      keyExtractor={(_item, i) => i.toString()}
      onRefresh={() => refresh()}
      refreshing={isOnRefresh}
      data={movies}
      extraData={movies}
      onEndReached={onEndReached}
      renderItem={({ item }) => (
        <Card
          onPress={(idMovie) => onNavigate(idMovie)}
          genere={getTextGenere(item.genre_ids, genere)}
          movie={item}
        />
      )}
    />
  </Wrapper>
);

export default Popular;
