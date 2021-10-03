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
  infoMovieBuy: AddBuyMovieParams;
  removeMovie(id: number): void;
};

const CardMovie: React.FC<Props> = ({ removeMovie, infoMovieBuy, ...rest }) => (
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
      <GenreMovie>
        R$
        {infoMovieBuy.price}
      </GenreMovie>
    </Container>
    <TouchableRemove onPress={() => removeMovie(infoMovieBuy.id)}>
      <IconTrash />
    </TouchableRemove>
  </Wrapper>
);

export default CardMovie;
