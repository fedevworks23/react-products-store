import { createAsyncThunk } from "@reduxjs/toolkit";
import { fetchAllProducts, fetchCategories, fetchRandomProduct } from "../services/productServices";

export const getRandomProduct = createAsyncThunk(
  "users/getRandomProduct",
  async (id: string) => {
    const response = await fetchRandomProduct(id);
    return response.data;
  }
);

export const getAllProducts = createAsyncThunk(
  "users/getAllProducts",
  async () => {
    const response = await fetchAllProducts();
    return response.data.products;
  }
);

export const getCategories = createAsyncThunk(
  "users/getCategories",
  async () => {
    const response = await fetchCategories();
    return response.data;
  }
);
