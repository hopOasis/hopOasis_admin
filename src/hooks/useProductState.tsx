import { useState } from "react";
import {
	useGetOne,
	useRecordContext,
	useResourceContext,
	useStore,
} from "react-admin";
import type { Offer } from "../types/offer";
import { ResourceName } from "../types/recource-name";

export const useProductState = () => {
	const record = useRecordContext();
	const resource = useResourceContext();
	const [offer] = useStore("currentOffer");
	const { data } = useGetOne<Offer>("special-offers", { id: offer });

	const isInTheOffer = () => {
		if (data && resource) {
			const { specialOfferBeers } = data;

			if (resource === ResourceName.Beer) {
				return specialOfferBeers.some(({ id }) => id === record.id);
			}
		}

		return false;
	};
	const [isChecked, setIsChecked] = useState<boolean>(isInTheOffer());
	// useEffect(() => {
	// 	console.log(offer);

	// 	async () => {
	// 		const response = await fetch(
	// 			`${import.meta.env.VITE_API_URL}/special-offers/3`,
	// 		);
	// 		const responseData = await response.json();
	// 		setData(responseData);
	// 	};
	// }, [offer]);
	return { isChecked, setIsChecked };
};

// if(resource === ResourceName.Cider) {
//   return specialOfferCiders.some(({id}) => id === record.id)
// }

// if(resource === ResourceName.Bundles) {
//   return specialOfferProductBundles.some(({id}) => id === record.id)
// }

// if(resource === ResourceName.Snack) {
//   return specialOfferSnacks.some(({id}) => id === record.id)
// }
