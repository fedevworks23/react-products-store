import { createAsyncThunk } from "@reduxjs/toolkit";
import { fetchAllProducts } from "../services/productServices";

export const getAllProducts = createAsyncThunk(
  "users/getAllProducts",
  async () => {
    const response = await fetchAllProducts();
    return response.data.products;
  }
);
