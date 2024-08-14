import { Beer } from "./beer";

export type Cider = Omit<Beer, 'beerName' | 'beerImage'> & {
  ciderName: string;
  ciderImage: string;
}