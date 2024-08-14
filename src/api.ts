import { log } from "console";
import simpleRestDataProvider from "ra-data-simple-rest";
import { type CreateParams, type DataProvider, fetchUtils } from "react-admin";
import { json } from "stream/consumers";
import { getImagesUrl } from "./utils";

const API_URL = import.meta.env.VITE_API_URL;
const baseDataProvider = simpleRestDataProvider(API_URL);

type BeverageParams = {
	name: string;
	priceLarge: number;
	priceSmall: number;
	volumeSmall: number;
	volumeLarge: number;
	description: string;
	beerColor: string;
	image: {
		rawFile: File;
		src?: string;
		title?: string;
	};
};

type ItemType = Omit<BeverageParams, "image"> & { imageName: string[] };

const createProductFormData = (params: CreateParams<BeverageParams>) => {
	const formData = new FormData();
	params.data.image?.rawFile &&
		formData.append("image", params.data.image.rawFile);
	params.data.name && formData.append("name", params.data.name);
	params.data.description &&
		formData.append("description", params.data.description);
	params.data.beerColor && formData.append("beerColor", params.data.beerColor);
	params.data.volumeSmall &&
		formData.append("volumeSmall", String(params.data.volumeSmall));
	params.data.volumeLarge &&
		formData.append("volumeLarge", String(params.data.volumeLarge));
	params.data.priceLarge &&
		formData.append("priceLarge", String(params.data.priceLarge));
	params.data.priceSmall &&
		formData.append("priceSmall", String(params.data.priceSmall));

	return formData;
};

export const customProvider: DataProvider = {
	...baseDataProvider,
	getList: async (resource) => {
		// const { page, perPage } = params.pagination;
		// const { field, order } = params.sort;
		const response = await fetchUtils.fetchJson(`${API_URL}/${resource}`);
		return {
			data:
				resource === "special-offers"
					? response.json
					: [
							...response.json.content.map((item: ItemType) => ({
								...item,
								imageName: getImagesUrl(item.imageName, API_URL, resource).join(
									" ",
								),
							})),
						],
			total: response.json.totalElements || response.json.length,
		};
	},

	getOne: async (resource, params) => {
		const { id } = params;
		const response = await fetchUtils.fetchJson(`${API_URL}/${resource}/${id}`);
		if (resource === "special-offers") {
			return {
				data: response.json,
			};
		}
		const preparedData = {
			...response.json,
			imageName: getImagesUrl(response.json.imageName, API_URL, resource).join(
				" ",
			),
		};

		return {
			data: preparedData,
		};
	},

	update: async (resource, params) => {
		const {
			beerColor,
			volumeLarge,
			volumeSmall,
			priceLarge,
			priceSmall,
			beerName,
			description,
		} = params.data;

		const response = await fetchUtils.fetchJson(
			`${API_URL}/${resource}/${params.id}`,
			{
				method: "PUT",
				body: JSON.stringify({
					beerColor,
					volumeLarge,
					volumeSmall,
					priceLarge,
					priceSmall,
					beerName,
					description,
				}),
			},
		);

		return {
			data: response.json,
		};
	},
	create: async (resource, params) => {
		if (resource !== "special-offers") {
			console.log("hello");

			const formData = createProductFormData(params);

			return fetchUtils
				.fetchJson(`${API_URL}/${resource}`, {
					method: "POST",
					body: formData,
				})
				.then(({ json }) => ({ data: json }));
		}

		const response = await fetchUtils.fetchJson(`${API_URL}/${resource}`, {
			method: "POST",
			body: JSON.stringify(params.data),
		});

		return {
			data: response.json,
		};
	},
};
