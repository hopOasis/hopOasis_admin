import simpleRestDataProvider from "ra-data-simple-rest";
import { type CreateParams, type DataProvider, fetchUtils } from "react-admin";
import { getImagesUrl } from "./utils";

const API_URL = "https://giou6fh6yg2ogdsh7uzcaobhte0wtwha.lambda-url.eu-central-1.on.aws";
const baseDataProvider = simpleRestDataProvider(API_URL);

type SnackParams = {
    id: string;
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

type ItemType = SnackParams;

const createProductFormData = (params: CreateParams<SnackParams>) => {
    const formData = new FormData();
    params.data.snackName && formData.append("snackName", params.data.snackName);
    params.data.description && formData.append("description", params.data.description);
    params.data.priceLarge && formData.append("priceLarge", String(params.data.priceLarge));
    params.data.priceSmall && formData.append("priceSmall", String(params.data.priceSmall));
    params.data.weightLarge && formData.append("weightLarge", String(params.data.weightLarge));
    params.data.weightSmall && formData.append("weightSmall", String(params.data.weightSmall));
    params.data.averageRating && formData.append("averageRating", String(params.data.averageRating));
    params.data.ratingCount && formData.append("ratingCount", String(params.data.ratingCount));

    return formData;
};

export const customProvider: DataProvider = {
    ...baseDataProvider,
    
    getList: async (resource, params) => {
        const { page, perPage } = params.pagination;
        const { field, order } = params.sort;
        const response = await fetchUtils.fetchJson(
            `${API_URL}/${resource}?_page=${page}&_limit=${perPage}&_sort=${field}&_order=${order}`
        );

        return {
            data: response.json.content.map((item: ItemType) => ({
                ...item,
                snackImageName: Array.isArray(item.snackImageName) 
                    ? getImagesUrl(item.snackImageName, API_URL, resource).join(" ") 
                    : "", 
            })),
            total: response.json.totalElements,
        };
    },

    getOne: async (resource, params) => {
        const { id } = params;
        const response = await fetchUtils.fetchJson(`${API_URL}/${resource}/${id}`);
        return {
            data: {
                ...response.json,
                snackImageName: Array.isArray(response.json.snackImageName) 
                    ? getImagesUrl(response.json.snackImageName, API_URL, resource).join(" ") 
                    : "",
            },
        };
    },

    update: async (resource, params) => {
        const { snackName, description, priceLarge, priceSmall, weightLarge, weightSmall, averageRating, ratingCount } = params.data;
        const response = await fetch(`${API_URL}/${resource}/${params.id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                snackName,
                description,
                priceLarge,
                priceSmall,
                weightLarge,
                weightSmall,
                averageRating,
                ratingCount,
            }),
        });

        if (!response.ok) {
            throw new Error("Failed to update");
        }

        return {
            data: await response.json(),
        };
    },

    create: async (resource, params) => {
        const formData = createProductFormData(params);
        return fetch(`${API_URL}/${resource}`, {
            method: "POST",
            body: formData,
        })
        .then((response) => response.json())
        .then((json) => ({ data: json }))
        .catch((error) => {
            console.error("Create request failed", error);
            throw error;
        });
    },
};
