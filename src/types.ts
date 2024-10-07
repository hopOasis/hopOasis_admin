export type CustomImage = {
  id: number;
  name: string; 
};

export type BeerParams = {
  id: number;
  beerName: string;
  volumeLarge: number;
  volumeSmall: number;
  priceLarge: number;
  priceSmall: number;
  description: string;
  beerColor: string;
  image: CustomImage[]; 
  averageRating: number;
  ratingCount: number;
  specialOfferIds: number[]; 
};

export type SnackParams = {
  id: number;
  snackName: string;
  description: string;
  priceLarge: number;
  priceSmall: number;
  weightLarge: number;
  weightSmall: number;
  image: CustomImage[]; // Изображения для снэков
  snackImageName: string[];
  averageRating: number;
  ratingCount: number;
  specialOfferIds: number[]; 
};

export type CiderParams = {
  id: number;
  ciderName: string;
  volumeLarge: number;
  volumeSmall: number;
  priceLarge: number;
  priceSmall: number;
  description: string;
  ciderColor: string;
  image: CustomImage[]; 
  averageRating: number;
  ratingCount: number;
  specialOfferIds: number[]; 
};

export type OfferParams = {
  id: number;
  name: string;
  active: boolean;
  specialOfferBeers: BeerParams[]; 
  specialOfferCiders: CiderParams[]; 
  specialOfferSnacks: SnackParams[]; 
  specialOfferProductBundles: number[]; 
};
