import React, { FC } from 'react';
import { IconArrowLeft, IconHeart } from '~/assets';
import { AirbnbRating } from '~/modules';
import {
  convertDateToYear,
  convertMinsToTime,
  getCoutries,
  getLanguage,
  getTextGenereDetails,
} from '~/utils';

import {
  BottomScreenBuy,
  BuyNowButton,
  Collection,
  Comments,
  ContainerDetailMovie,
  ContainerMovie,
  CountRating,
  DurationMovie,
  GenreMovie,
  GolBack,
  Image,
  InfoMovie,
  Language,
  Price,
  PriceBuy,
  PriceBuyMovie,
  Synopsi,
  TextSynopsi,
  Title,
  TitleSynopsi,
  TouchableIconHeart,
  Wrapper,
  WrapperRating,
} from './styles';

type Props = {
  detailsMovie: DetailMovie;
  onGoBack(): void;
  BuyNow(): void;
  bought: boolean;
  onClickHeart(): void;
  showColorHeart: boolean;
};

const DetailMovie: FC<Props> = ({
  bought,
  detailsMovie,
  onGoBack,
  BuyNow,
  onClickHeart,
  showColorHeart,
}) => (
  <Wrapper>
    <GolBack onPress={() => onGoBack()}>
      <IconArrowLeft color="black" />
    </GolBack>
    <ContainerMovie>
      <Image
        resizeMode="contain"
        source={{
          uri: `https://image.tmdb.org/t/p/original${
            detailsMovie.poster_path
              ? detailsMovie.poster_path
              : detailsMovie.backdrop_path
          }`,
        }}
      />
      <ContainerDetailMovie>
        <Title>{detailsMovie.title}</Title>
        <WrapperRating>
          <AirbnbRating
            isDisabled
            showRating={false}
            size={13}
            defaultRating={detailsMovie.vote_average / 2}
          />
          <CountRating>{detailsMovie.vote_average}</CountRating>
        </WrapperRating>
        <GenreMovie>{getTextGenereDetails(detailsMovie.genres)}</GenreMovie>
        <DurationMovie>{convertMinsToTime(detailsMovie.runtime)}</DurationMovie>
        <DurationMovie>
          {convertDateToYear(detailsMovie.release_date)}
          {' - '}
          {getCoutries(detailsMovie.production_countries)}
        </DurationMovie>
      </ContainerDetailMovie>
      <TouchableIconHeart onPress={() => onClickHeart()}>
        <IconHeart color={showColorHeart ? '#ee4040' : '#000'} />
      </TouchableIconHeart>
    </ContainerMovie>
    <InfoMovie>
      <Language
        title="Linguagem"
        value={getLanguage(detailsMovie.spoken_languages)}
      />
      <Comments title="Popularidade" value={detailsMovie.popularity} />
      <Collection
        title="Quantidade de vontos"
        value={detailsMovie.vote_count}
      />
    </InfoMovie>
    <Synopsi>
      <TitleSynopsi>Synopsis</TitleSynopsi>
      <TextSynopsi>{detailsMovie.overview}</TextSynopsi>
    </Synopsi>

    <BottomScreenBuy>
      <PriceBuyMovie>
        <Price>Preço</Price>
        <PriceBuy>
          R$
          {detailsMovie.price}
        </PriceBuy>
      </PriceBuyMovie>
      <BuyNowButton disabled={!bought} onPress={() => BuyNow()}>
        Comprar agora
      </BuyNowButton>
    </BottomScreenBuy>
  </Wrapper>
);

export default DetailMovie;
