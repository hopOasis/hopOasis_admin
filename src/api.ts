import simpleRestDataProvider from "ra-data-simple-rest";
import { type DataProvider, fetchUtils } from "react-admin";
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

export const customProvider: DataProvider = {
	...baseDataProvider,
	getList: async (resource, params) => {
		const { page, perPage } = params.pagination;
		const { field, order } = params.sort;
		const response = await fetchUtils.fetchJson(
			`${API_URL}/${resource}?_page=${page}&_limit=${perPage}&_sorts=${field}&_order=${order}`,
		);

		console.log("respon", response);
		return {
			data: [
				...response.json.content.map((item: ItemType) => ({
					...item,
					imageName: getImagesUrl(item.imageName, API_URL, resource).join(" "),
				})),
			],
			total: response.json.totalElements,
		};
	},

	getOne: async (resource, params) => {
		const { id } = params;
		const response = await fetchUtils.fetchJson(`${API_URL}/${resource}/${id}`);
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
		// const formData = createProductFormData(params);
		console.log("params", params.data);
		return fetchUtils
			.fetchJson(`${API_URL}/${resource}`, {
				method: "POST",
				body: JSON.stringify(params.data),
			})
			.then(({ json }) => ({ data: json }));
	},
};
