import simpleRestDataProvider from "ra-data-simple-rest";
import { type CreateParams, type DataProvider, fetchUtils } from "react-admin";
import { getImagesUrl } from "./utils";

const API_URL = "http://prod.eba-33ij8qpt.eu-central-1.elasticbeanstalk.com";
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
	getList: async (resource, params) => {
		const { page, perPage } = params.pagination;
		const { field, order } = params.sort;
		const response = await fetchUtils.fetchJson(
			`${API_URL}/${resource}?_page=${page}$_limit=${perPage}&_sorts=${field}&_order=${order}`,
		);
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
		const formData = createProductFormData(params);
		console.log(formData);
		return fetchUtils
			.fetchJson(`${API_URL}/${resource}`, {
				method: "POST",
				body: formData,
			})
			.then(({ json }) => ({ data: json }));
	},
};
