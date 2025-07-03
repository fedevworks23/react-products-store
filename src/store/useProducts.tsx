import { useDispatch, useSelector } from "react-redux";
import type { AppDispatch, RootState } from "./index";
import type { ProductsState } from "../types/ProductsState";

export const useProducts = (): ProductsState & { dispatch: AppDispatch } => {
  const dispatch = useDispatch<AppDispatch>();
  const productsState = useSelector((state: RootState) => state.products);
  return { ...productsState, dispatch };
};
