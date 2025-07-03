import { createSlice } from "@reduxjs/toolkit";
import { getAllProducts, getRandomProduct } from "../../store/productsThunk";
import type { RandomProduct } from "../../types/RandomProduct";
import type { Product } from "../../types/productTypes";

interface ProductsState {
  detailsStatus: string;
  random_product: RandomProduct | null;
  all_products: Product[];
}

const initialState: ProductsState = {
  detailsStatus: "idle",
  random_product: null,
  all_products: [],
};

const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    clearAllProducts(state) {
      state.all_products = [];
    },
  },
  extraReducers: (builder) => {
    // Get Random Product
    builder.addCase(getRandomProduct.pending, (state) => {
      state.detailsStatus = "loading";
    });
    builder.addCase(getRandomProduct.fulfilled, (state, action) => {
      state.random_product = action.payload;
    });
    builder.addCase(getRandomProduct.rejected, (state) => {
      state.detailsStatus = "failed";
    });

    // Get All Products limit 30
    builder.addCase(getAllProducts.pending, (state) => {
      state.detailsStatus = "loading";
    });
    builder.addCase(getAllProducts.fulfilled, (state, action) => {
      state.all_products = action.payload;
    });
    builder.addCase(getAllProducts.rejected, (state) => {
      state.detailsStatus = "failed";
    });
  },
});

export const { clearAllProducts } = productsSlice.actions;

export default productsSlice.reducer;
