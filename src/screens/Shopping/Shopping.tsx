import React, { FC } from 'react';
import { IconArrowLeft } from '~/assets';
import { getPriceListShop, isEmpty } from '~/utils';

import {
  BottomShpping,
  CardBuy,
  CarrinhoText,
  Container,
  GolBack,
  Header,
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
  onGoBack(): void;
};

const Shopping: FC<Props> = ({ onGoBack, shop, removeMovie }) => (
  <Wrapper>
    <Header>
      <GolBack onPress={() => onGoBack()}>
        <IconArrowLeft color="black" />
      </GolBack>
      <CarrinhoText>Carrinho</CarrinhoText>
    </Header>

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
