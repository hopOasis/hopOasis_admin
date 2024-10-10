
export type CustomImage = string;


export type ProductOption = {
  id: number;
  quantity: number;
  price: number;
};


export type VolumeOption = ProductOption & {
  volume: number;
};


export type WeightOption = ProductOption & {
  weight: number;
};

export type BeerParams = {
  id: number;
  beerName: string;
  description: string;
  beerColor: string;
  imageName: CustomImage[]; 
  averageRating: number;
  ratingCount: number;
  specialOfferIds: number[];
  itemType: 'BEER';
  options: VolumeOption[];
};


export type CiderParams = {
  id: number;
  ciderName: string;
  description: string;
  ciderImageName: CustomImage[]; 
  averageRating: number;
  ratingCount: number;
  specialOfferIds: number[];
  itemType: 'CIDER';
  options: VolumeOption[]; 
};


export type SnackParams = {
  id: number;
  snackName: string;
  description: string;
  snackImageName: CustomImage[];
  averageRating: number;
  ratingCount: number;
  specialOfferIds: number[];
  itemType: 'SNACK';
  options: WeightOption[];
};

// Product Bundle
export type ProductBundleParams = {
  id: number;
  name: string;
  description: string;
  productImageName: CustomImage[];
  averageRating: number;
  ratingCount: number;
  specialOfferIds: number[];
  itemType: 'PRODUCT_BUNDLE';
  options: ProductOption[];
};


export type OfferParams = {
  id: number;
  name: string;
  active: boolean;
  specialOfferBeers: BeerParams[];
  specialOfferCiders: CiderParams[];
  specialOfferSnacks: SnackParams[];
  specialOfferProductBundles: ProductBundleParams[];
};
