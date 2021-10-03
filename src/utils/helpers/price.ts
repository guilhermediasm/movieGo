export const genRand = (
  min: number,
  max: number,
  decimalPlaces: number,
): number => {
  const rand = Math.random() * (max - min) + min;
  const power = 10 ** decimalPlaces;
  return Math.floor(rand * power) / power;
};

export const getPriceListShop = (shop: AddBuyMovieParams[]): string => {
  const prices = shop.map((movie) => movie.price);

  let priceTotal = 0;
  for (let x = 0; x < prices.length; x += 1) {
    priceTotal += prices[x];
  }
  const power = 10 ** 2;
  priceTotal = Math.floor(priceTotal * power) / power;

  return `R$ ${priceTotal}`;
};
