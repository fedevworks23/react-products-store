import { createSlice } from "@reduxjs/toolkit";
import {
  getAllProducts,
  getCategories,
  getRandomProduct,
} from "../../store/productsThunk";
import type { ProductsState } from "../../types/ProductsState";
import { handleThunk } from "../../store/productExtraReducer";

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
    handleThunk(builder, {
      thunk: getRandomProduct,
      dataKey: "random_product",
      statusKey: "detailsStatus",
    });

    // Get All Products with default limit 30
    handleThunk(builder, {
      thunk: getAllProducts,
      dataKey: "all_products",
      statusKey: "detailsStatus",
    });

    // Get Categories List
    handleThunk(builder, {
      thunk: getCategories,
      dataKey: "categories",
      statusKey: "detailsStatus",
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
