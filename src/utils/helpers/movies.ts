import { isEmpty } from 'lodash';

export const getTextGenere = (
  idsGenere: number[],
  genere: GenereMovie[],
): string[] => {
  const textGenere: string[] = [];

  idsGenere.map((value) => {
    genere.findIndex((elemente) => {
      if (value === elemente.id) {
        if (textGenere.length) {
          textGenere.push(`, ${elemente.name}`);
        } else {
          textGenere.push(elemente.name);
        }
        return;
      }
      return;
    });
    return;
  });

  return textGenere;
};

export const getTextGenereDetails = (genereDetils: GenereMovie[]): string[] =>
  genereDetils
    ? genereDetils.map((value, index) =>
        index === 0 ? value.name : `, ${value.name}`,
      )
    : ['N/A'];

export const getCoutries = (
  production_countries: { iso_3166_1: string; name: string }[],
): string =>
  !isEmpty(production_countries) ? production_countries[0].name : 'N/A';

export const getLanguage = (
  language: { english_name: string; iso_639_1: string; name: string }[],
): string => (language ? language[0].name : 'N/A');

export const getBoughtMovie = (
  id: number,
  buyMovie: AddBuyMovieParams[],
): boolean => buyMovie.findIndex((moviebuy) => moviebuy.id === id) === -1;

export const getLikeMovie = (
  id: number,
  LikeMovie: AddLikeMovieParams[],
): boolean => LikeMovie.findIndex((like) => like.id === id) > -1;
