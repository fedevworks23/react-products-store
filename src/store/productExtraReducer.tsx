import type { ActionReducerMapBuilder, AsyncThunk } from "@reduxjs/toolkit";

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
