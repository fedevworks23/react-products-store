import { createSlice } from "@reduxjs/toolkit";
import {
  getAllProducts,
  getCategories,
  getRandomProduct,
} from "../../store/productsThunk";
import type { ProductsState } from "../../types/ProductsState";

const initialState: ProductsState = {
  detailsStatus: "idle",
  random_product: null,
  all_products: [],
  categories: [],
  product_filters: {
    per_page: "8",
    current_page: "1",
  },
  wishlists: [],
};

const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    addToWishLists(state, action) {
      console.log(action.payload);

      state.wishlists = [...state.wishlists, action.payload];
    },
    deleteFromWishLists(state, action) {
      state.wishlists = action.payload;
    },
    setProductFilters(state, action) {
      state.product_filters["per_page"] = action.payload.per_page;
      state.product_filters["current_page"] = action.payload.current_page;
    },
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

    // Get Categories List
    builder.addCase(getCategories.pending, (state) => {
      state.detailsStatus = "loading";
    });
    builder.addCase(getCategories.fulfilled, (state, action) => {
      state.categories = action.payload;
    });
    builder.addCase(getCategories.rejected, (state) => {
      state.detailsStatus = "failed";
    });
  },
});

export const {
  setProductFilters,
  addToWishLists,
  deleteFromWishLists,
  clearAllProducts,
} = productsSlice.actions;

export default productsSlice.reducer;
