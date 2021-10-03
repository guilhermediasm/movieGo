import React, { useState } from 'react';
import { ActivityIndicator } from 'react-native';
import { AirbnbRating } from '~/modules';

import {
  Container,
  CountRating,
  GenreMovie,
  Image,
  OriginalTitle,
  Title,
  TouchableMovie,
  Wrapper,
  WrapperRating,
} from './styles';

type Props = {
  movie: MOVIES;
  genere: string[];
  onPress(idMovie: number): void;
};

const CardMovie: React.FC<Props> = ({ onPress, movie, genere, ...rest }) => (
  <TouchableMovie onPress={() => onPress(movie.id)}>
    <Wrapper {...rest}>
      <Image
        resizeMode="contain"
        source={{
          uri: `https://image.tmdb.org/t/p/original${movie.poster_path}`,
        }}
      />

      <Container>
        <Title>{movie.title}</Title>
        <OriginalTitle>{movie.original_title}</OriginalTitle>

        <WrapperRating>
          <AirbnbRating
            isDisabled
            showRating={false}
            size={13}
            defaultRating={movie.vote_average / 2}
          />
          <CountRating>{movie.vote_average}</CountRating>
        </WrapperRating>

        <GenreMovie>{genere}</GenreMovie>
      </Container>
    </Wrapper>
  </TouchableMovie>
);

export default CardMovie;
