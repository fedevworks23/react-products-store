import { productsApi } from "../api/productsApi";

export const fetchRandomProduct = (id: string) => productsApi.get(`/products/${id}`);

export const fetchAllProducts = () => productsApi.get("/products");
