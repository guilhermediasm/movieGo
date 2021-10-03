import React, { FC } from 'react';
import { getPriceListShop, isEmpty } from '~/utils';

import {
  BottomShpping,
  CardBuy,
  Container,
  ListShopBuyMovie,
  Ops,
  ShopBuy,
  TextOps,
  Total,
  Wrapper,
} from './styles';

type Props = {
  shop: AddBuyMovieParams[];
  removeMovie(id: number): void;
};

const Shopping: FC<Props> = ({ shop, removeMovie }) => (
  <Wrapper>
    {!isEmpty(shop) && (
      <ListShopBuyMovie
        keyExtractor={(_item, i) => i.toString()}
        data={shop}
        extraData={shop}
        renderItem={({ item }) => (
          <CardBuy removeMovie={(id) => removeMovie(id)} infoMovieBuy={item} />
        )}
      />
    )}
    {isEmpty(shop) && (
      <Container>
        <Ops>Ops!</Ops>
        <TextOps>
          Parece que ainda nao tem nada no seu carrinho, adicione algum filme no
          carrinho e ele vai aparecer aqui
        </TextOps>
      </Container>
    )}
    {!isEmpty(shop) && (
      <BottomShpping>
        <Total>Total</Total>
        <ShopBuy>{getPriceListShop(shop)}</ShopBuy>
      </BottomShpping>
    )}
  </Wrapper>
);

export default Shopping;
