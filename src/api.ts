
import simpleRestDataProvider from "ra-data-simple-rest";
import { CreateParams, DataProvider, fetchUtils, UpdateParams } from "react-admin";
import { getImagesUrl } from "./utils";
import { OfferParams, SnackParams, BeerParams, CiderParams } from "./types";

const API_URL = "https://gfkg3ijokauacf7dkjkvjqqeai0xefka.lambda-url.eu-central-1.on.aws";

const baseDataProvider = simpleRestDataProvider(API_URL);

const processPaginatedResponse = <T>(response: { json: { content: T[]; totalElements: number } }) => {
    return {
        data: response.json.content,
        total: response.json.totalElements,
    };
};

const createOfferFormData = (params: CreateParams<OfferParams>) => {
    const formData = new FormData();
    if (params.data.name) formData.append("name", params.data.name);
    if (params.data.active !== undefined) formData.append("active", String(params.data.active));
    formData.append("specialOfferBeers", JSON.stringify(params.data.specialOfferBeers || []));
    formData.append("specialOfferCiders", JSON.stringify(params.data.specialOfferCiders || []));
    formData.append("specialOfferSnacks", JSON.stringify(params.data.specialOfferSnacks || []));
    formData.append("specialOfferProductBundles", JSON.stringify(params.data.specialOfferProductBundles || []));
    return formData;
};

const createSnackFormData = (params: CreateParams<SnackParams>) => {
    const formData = new FormData();
    if (params.data.snackName) formData.append("snackName", params.data.snackName);
    if (params.data.description) formData.append("description", params.data.description);
    if (params.data.priceLarge !== undefined) formData.append("priceLarge", String(params.data.priceLarge));
    if (params.data.priceSmall !== undefined) formData.append("priceSmall", String(params.data.priceSmall));
    if (params.data.weightLarge !== undefined) formData.append("weightLarge", String(params.data.weightLarge));
    if (params.data.weightSmall !== undefined) formData.append("weightSmall", String(params.data.weightSmall));
    if (params.data.averageRating !== undefined) formData.append("averageRating", String(params.data.averageRating));
    if (params.data.ratingCount !== undefined) formData.append("ratingCount", String(params.data.ratingCount));
    if (params.data.snackImageName && Array.isArray(params.data.snackImageName)) {
        params.data.snackImageName.forEach((imageName) => {
            formData.append("snackImageName", imageName);
        });
    }
    return formData;
};

export const customProvider: DataProvider = {
    ...baseDataProvider,

    getList: async (resource, params) => {
        try {
            let url = `${API_URL}/${resource}`;
            const { page, perPage } = params.pagination;
            const { field, order } = params.sort;
            url += `?_page=${page}&_limit=${perPage}&_sort=${field}&_order=${order}`;
            const response = await fetchUtils.fetchJson(url);
            if (resource === "special-offers") {
                return processPaginatedResponse<OfferParams>(response);
            }
            if (resource === "snacks") {
                const data = response.json.content.map((item: SnackParams) => ({
                    ...item,
                    snackImageName: Array.isArray(item.snackImageName)
                        ? getImagesUrl(item.snackImageName, API_URL, resource).join(" ")
                        : "",
                }));
                return {
                    data,
                    total: response.json.totalElements,
                };
            }
            if (resource === "beers" || resource === "ciders") {
                return processPaginatedResponse<BeerParams | CiderParams>(response);
            }
            return baseDataProvider.getList(resource, params);
        } catch (error) {
            console.error(`Error fetching list for resource ${resource}:`, error);
            throw error;
        }
    },

    getOne: async (resource, params) => {
        try {
            const url = `${API_URL}/${resource}/${params.id}`;
            const response = await fetchUtils.fetchJson(url);
            if (resource === "special-offers") {
                return {
                    data: response.json,
                };
            }
            if (resource === "snacks") {
                const data: SnackParams = {
                    ...response.json,
                    snackImageName: Array.isArray(response.json.snackImageName)
                        ? getImagesUrl(response.json.snackImageName, API_URL, resource).join(" ")
                        : [],
                };
                return { data };
            }
            return baseDataProvider.getOne(resource, params);
        } catch (error) {
            console.error(`Error fetching one item for resource ${resource}:`, error);
            throw error;
        }
    },

    update: async (resource, params) => {
        try {
            if (resource === "special-offers") {
                const formData = createOfferFormData(params as UpdateParams<OfferParams>);
                const response = await fetch(`${API_URL}/special-offers/${params.id}`, {
                    method: "PUT",
                    body: formData,
                });
                if (!response.ok) {
                    const errorText = await response.text();
                    console.error(`Failed to update ${resource}. Response:`, errorText);
                    throw new Error("Failed to update");
                }
                return {
                    data: await response.json(),
                };
            }
            if (resource === "snacks") {
                const formData = createSnackFormData(params as UpdateParams<SnackParams>);
                const response = await fetch(`${API_URL}/snacks/${params.id}`, {
                    method: "PUT",
                    body: formData,
                });
                if (!response.ok) {
                    const errorText = await response.text();
                    console.error(`Failed to update ${resource}. Response:`, errorText);
                    throw new Error("Failed to update");
                }
                return {
                    data: await response.json(),
                };
            }
            return baseDataProvider.update(resource, params);
        } catch (error) {
            console.error(`Error updating ${resource} with id ${params.id}:`, error);
            throw error;
        }
    },

    create: async (resource, params) => {
        try {
            if (resource === "special-offers") {
                const formData = createOfferFormData(params as CreateParams<OfferParams>);
                const response = await fetch(`${API_URL}/special-offers`, {
                    method: "POST",
                    body: formData,
                });
                if (!response.ok) {
                    const errorText = await response.text();
                    console.error(`Failed to create ${resource}. Response:`, errorText);
                    throw new Error("Failed to create");
                }
                return {
                    data: await response.json(),
                };
            }
            if (resource === "snacks") {
                const formData = createSnackFormData(params as CreateParams<SnackParams>);
                const response = await fetch(`${API_URL}/snacks`, {
                    method: "POST",
                    body: formData,
                });
                if (!response.ok) {
                    const errorText = await response.text();
                    console.error(`Failed to create ${resource}. Response:`, errorText);
                    throw new Error("Failed to create");
                }
                return {
                    data: await response.json(),
                };
            }
            return baseDataProvider.create(resource, params);
        } catch (error) {
            console.error(`Error creating new ${resource}:`, error);
            throw error;
        }
    },

    delete: async (resource, params) => {
        return baseDataProvider.delete(resource, params);
    },

    getMany: async (resource, params) => {
        return baseDataProvider.getMany(resource, params);
    },

    getManyReference: async (resource, params) => {
        return baseDataProvider.getManyReference(resource, params);
    },

    updateMany: async (resource, params) => {
        return baseDataProvider.updateMany(resource, params);
    },

    deleteMany: async (resource, params) => {
        return baseDataProvider.deleteMany(resource, params);
    },
};
