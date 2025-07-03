import { createAsyncThunk } from "@reduxjs/toolkit";
import { fetchAllProducts, fetchRandomProduct } from "../services/productServices";

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
