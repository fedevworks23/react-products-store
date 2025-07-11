import type { ActionReducerMapBuilder, AsyncThunk } from "@reduxjs/toolkit";

import {
  getAllProducts,
  getCategories,
  getRandomProduct,
} from "./productThunk";

type ThunkConfig<T> = {
  thunk: AsyncThunk<any, any, any>;
  dataKey: keyof T;
  statusKey: keyof T;
};

export const handleThunk = <T,>(
  builder: ActionReducerMapBuilder<T>,
  config: ThunkConfig<T>
) => {
  const { thunk, dataKey, statusKey } = config;

  builder
    .addCase(thunk.pending, (state) => {
      (state as any)[statusKey] = "loading";
    })
    .addCase(thunk.fulfilled, (state, action) => {
      (state as any)[dataKey] = action.payload;
      (state as any)[statusKey] = "succeeded";
    })
    .addCase(thunk.rejected, (state) => {
      (state as any)[statusKey] = "failed";
    });
};

export const ExtraReducers = (builder: any) => {
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
};

