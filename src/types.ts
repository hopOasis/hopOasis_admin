
export type BeerParams = {
  id: number;
  beerName: string;
  priceLarge: number;
  priceSmall: number;
  volumeLarge: number;
  volumeSmall: number;
  description: string;
  beerColor: string;
  imageName: string;
};

export type SnackParams = {
  id: number;
  snackName: string;
  description: string;
  priceLarge: number;
  priceSmall: number;
  weightLarge: number;
  weightSmall: number;
  snackImageName: string[];
  averageRating: number;
  ratingCount: number;
};

export type CiderParams = {
  id: number;
  ciderName: string;
  priceLarge: number;
  priceSmall: number;
  volumeLarge: number;
  volumeSmall: number;
  description: string;
  ciderColor: string;
  imageName: string;
};

export type OfferParams = {
  id: number;
  name: string;
  active: boolean;
  specialOfferBeers: number[]; 
  specialOfferCiders: number[]; 
  specialOfferSnacks: number[]; 
  specialOfferProductBundles: number[]; 
};
