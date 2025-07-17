import { createSlice } from "@reduxjs/toolkit";
import type { ProductsState } from "../../types/ProductsState";
import { ExtraReducers } from "../../store/productExtraReducer";

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
  cart_lists: [],
};

const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    addToWishLists(state, action) {
      state.wishlists = [...state.wishlists, action.payload];
    },
    deleteFromWishLists(state, action) {
      state.wishlists = action.payload;
    },
    addToCartLists(state, action) {
      state.cart_lists = [...state.cart_lists, action.payload];
    },
    deleteFromCartLists(state, action) {
      state.cart_lists = action.payload;
    },
    setProductFilters(state, action) {
      state.product_filters["per_page"] = action.payload.per_page;
      state.product_filters["current_page"] = action.payload.current_page;
    },
    clearAllProducts(state) {
      state.all_products = [];
    },
  },
  extraReducers: ExtraReducers,
});

export const {
  setProductFilters,
  addToWishLists,
  deleteFromWishLists,
  addToCartLists,
  deleteFromCartLists,
  clearAllProducts,
} = productsSlice.actions;

export default productsSlice.reducer;
