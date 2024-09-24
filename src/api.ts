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
        try {
            const response = await fetchUtils.fetchJson(
                `${API_URL}/${resource}?_page=${page}&_limit=${perPage}&_sort=${field}&_order=${order}`
            );

            if (!response.json || !response.json.content) {
                throw new Error("Invalid response structure");
            }

            return {
                data: response.json.content.map((item: ItemType) => ({
                    ...item,
                    snackImageName: Array.isArray(item.snackImageName)
                        ? getImagesUrl(item.snackImageName, API_URL, resource).join(" ")
                        : "",
                })),
                total: response.json.totalElements,
            };
        } catch (error) {
            console.error(`Error fetching list for resource ${resource}:`, error);
            throw error;
        }
    },

    getOne: async (resource, params) => {
        const { id } = params;
        try {
            const response = await fetchUtils.fetchJson(`${API_URL}/${resource}/${id}`);

            if (!response.json) {
                throw new Error("Invalid response structure");
            }

            return {
                data: {
                    ...response.json,
                    snackImageName: Array.isArray(response.json.snackImageName)
                        ? getImagesUrl(response.json.snackImageName, API_URL, resource).join(" ")
                        : "",
                },
            };
        } catch (error) {
            console.error(`Error fetching one item for resource ${resource}:`, error);
            throw error;
        }
    },

    update: async (resource, params) => {
        const { snackName, description, priceLarge, priceSmall, weightLarge, weightSmall, averageRating, ratingCount } = params.data;
        try {
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
                const errorText = await response.text(); // Получаем текст ошибки
                console.error(`Failed to update ${resource}. Response:`, errorText);
                throw new Error("Failed to update");
            }

            return {
                data: await response.json(),
            };
        } catch (error) {
            console.error(`Error updating ${resource} with id ${params.id}:`, error);
            throw error;
        }
    },

    create: async (resource, params) => {
        const formData = createProductFormData(params);
        try {
            const response = await fetch(`${API_URL}/${resource}`, {
                method: "POST",
                body: formData,
            });

            if (!response.ok) {
                const errorText = await response.text(); // Логируем ошибку сервера
                console.error(`Failed to create ${resource}. Response:`, errorText);
                throw new Error("Failed to create");
            }

            return {
                data: await response.json(),
            };
        } catch (error) {
            console.error(`Error creating new ${resource}:`, error);
            throw error;
        }
    },
};
