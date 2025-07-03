import { createSlice } from "@reduxjs/toolkit";
import { getAllProducts } from "../../store/productsThunk";

const productsSlice = createSlice({
  name: "products",
  initialState: {    count: 0,
    all_products: [],
  },
  reducers: {
    clearAllProducts(state) {
      state.all_products = [];
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getAllProducts.fulfilled, (state, action) => {
      state.all_products = action.payload
    });
  },
});

export const { clearAllProducts } = productsSlice.actions;

export default productsSlice.reducer;
