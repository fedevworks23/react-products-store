import { productsApi } from "../api/productsApi";

export const fetchRandomProduct = (id: string) =>
  productsApi.get(`/products/${id}`);

export const fetchAllProducts = () =>
  productsApi.get(
    `/products?limit=${0}&skip=${0}&select=title,price,images,discountPercentage,rating,reviews&sortBy=price&order=desc`
  );

export const fetchCategories = () => productsApi.get(`/products/categories`);
