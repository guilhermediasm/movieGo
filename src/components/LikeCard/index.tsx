import React from 'react';
import { IconTrash } from '~/assets';
import {
  Container,
  GenreMovie,
  Image,
  Title,
  TouchableRemove,
  Wrapper,
} from './styles';

type Props = {
  infoMovieBuy: AddLikeMovieParams;
  removeMovieLike(id: number): void;
};

const LikeMovie: React.FC<Props> = ({
  removeMovieLike,
  infoMovieBuy,
  ...rest
}) => (
  <Wrapper {...rest}>
    <Image
      resizeMode="contain"
      source={{
        uri: infoMovieBuy.uri,
      }}
    />
    <Container>
      <Title>{infoMovieBuy.title}</Title>
      <GenreMovie>{infoMovieBuy.genre}</GenreMovie>
    </Container>
    <TouchableRemove onPress={() => removeMovieLike(infoMovieBuy.id)}>
      <IconTrash />
    </TouchableRemove>
  </Wrapper>
);

export default LikeMovie;
