type Payload = [AddBuyMovieParams[]];

export type Action = {
  type: string;
  payload: Payload;
};

export type ShopState = {
  buyMovie: AddBuyMovieParams[];
};
