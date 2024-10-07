import simpleRestDataProvider from "ra-data-simple-rest";
import { CreateParams, DataProvider, fetchUtils, UpdateParams, RaRecord, Identifier } from "react-admin";
import { OfferParams, SnackParams, BeerParams, CiderParams, CustomImage } from "./types";
import { getImagesUrl } from "./utils";

const API_URL = "https://gfkg3ijokauacf7dkjkvjqqeai0xefka.lambda-url.eu-central-1.on.aws";
const baseDataProvider = simpleRestDataProvider(API_URL);

const processPaginatedResponse = <T extends RaRecord<Identifier>>(response: { json: { content: T[]; totalElements: number } }) => {
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

  if (params.data.image && Array.isArray(params.data.image)) {
    params.data.image.forEach((img: CustomImage) => {
      formData.append("image[]", JSON.stringify({ id: img.id, name: img.name }));
    });
  }
  return formData;
};

// Общая функция для обработки ресурса (используется для create и update)
const fetchResource = async <T extends RaRecord<Identifier>>(resource: string, method: 'POST' | 'PUT', params?: UpdateParams<T> | CreateParams<T>) => {
  const url = `${API_URL}/${resource}${params && 'id' in params ? `/${params.id}` : ''}`;
  const response = await fetch(url, {
    method,
    body: params ? (resource === "special-offers" ? createOfferFormData(params as CreateParams<OfferParams>) : createSnackFormData(params as CreateParams<SnackParams>)) : undefined,
  });

  if (!response.ok) {
    const errorText = await response.text();
    console.error(`Failed to ${method.toLowerCase()} ${resource}. Response:`, errorText);
    throw new Error(`Failed to ${method.toLowerCase()}`);
  }

  return await response.json();
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

      switch (resource) {
        case "special-offers":
          return {
            data: response.json,
            total: response.json.length,
          };
        case "snacks": {
          // Обработка snacks с учетом изображений
          const snacksData = response.json.content.map((item: SnackParams) => ({
            ...item,
            image: Array.isArray(item.image) ? getImagesUrl(item.image.map((img: CustomImage) => img.name), API_URL, resource) : [],
          }));
          return {
            data: snacksData,
            total: response.json.totalElements,
          };
        }
        case "beers":
          return processPaginatedResponse<BeerParams>(response);
        case "ciders":
          return processPaginatedResponse<CiderParams>(response);
        default:
          return baseDataProvider.getList(resource, params);
      }
    } catch (error) {
      console.error(`Error fetching list for resource ${resource}:`, error);
      throw error;
    }
  },

  getOne: async (resource, params) => {
    try {
      const response = await fetchUtils.fetchJson(`${API_URL}/${resource}/${params.id}`);
      switch (resource) {
        case "special-offers":
          return { data: response.json };
        case "snacks": {
          // Исправление: используем response.json вместо item
          const snackData: SnackParams = {
            ...response.json,
            image: Array.isArray(response.json.image) ? getImagesUrl(response.json.image.map((img: CustomImage) => img.name), API_URL, resource) : [],
          };
          return { data: snackData };
        }
        case "beers":
          return { data: response.json as BeerParams };
        case "ciders":
          return { data: response.json as CiderParams };
        default:
          return baseDataProvider.getOne(resource, params);
      }
    } catch (error) {
      console.error(`Error fetching one item for resource ${resource}:`, error);
      throw error;
    }
  },

  update: async (resource, params) => {
    try {
      return {
        data: await fetchResource(resource, "PUT", params),
      };
    } catch (error) {
      console.error(`Error updating ${resource} with id ${params.id}:`, error);
      throw error;
    }
  },

  create: async (resource, params) => {
    try {
      return {
        data: await fetchResource(resource, "POST", params),
      };
    } catch (error) {
      console.error(`Error creating new ${resource}:`, error);
      throw error;
    }
  },

  delete: async (resource, params) => {
    return baseDataProvider.delete(resource, params);
  },

  deleteMany: async (resource, params) => {
    return baseDataProvider.deleteMany(resource, params);
  },
};
