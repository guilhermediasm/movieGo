import React, { FC } from 'react';
import { isEmpty } from '~/utils';

import {
  Card,
  Container,
  ListShopBuyMovie,
  Ops,
  TextOps,
  Wrapper,
} from './styles';

type Props = {
  likes: AddLikeMovieParams[];
  removeMovieLike(id: number): void;
};

const Like: FC<Props> = ({ likes, removeMovieLike }) => (
  <Wrapper>
    {!isEmpty(likes) && (
      <ListShopBuyMovie
        keyExtractor={(_item, i) => i.toString()}
        data={likes}
        extraData={likes}
        renderItem={({ item }) => (
          <Card
            removeMovieLike={(id) => removeMovieLike(id)}
            infoMovieBuy={item}
          />
        )}
      />
    )}
    {isEmpty(likes) && (
      <Container>
        <Ops>Ops!</Ops>
        <TextOps>
          Parece que ainda não tem nada marcado como gostei, marque algum filme
          e ira aparecer aqui.
        </TextOps>
      </Container>
    )}
  </Wrapper>
);

export default Like;
