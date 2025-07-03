import { productsApi } from "../api/productsApi";

export const fetchAllProducts = () => productsApi.get("/products");
