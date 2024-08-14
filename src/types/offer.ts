import { Beer } from "./beer";
import { Cider } from "./cider";
import { ProductBundle } from "./product-bundle";
import { Snacks } from "./snacks";

export interface Offer {
	id: number;
	name: string;
	active: boolean;
	specialOfferBeers: Beer[];
	specialOfferCiders: Cider[];
	specialOfferSnacks: Snacks[];
	specialOfferProductBundles: ProductBundle[];
}
