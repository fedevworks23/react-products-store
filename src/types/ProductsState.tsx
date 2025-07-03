import type { ProductDetails } from "./ProductDetails";
// import type { Product } from "./productTypes";

interface Categories {
  slug: string;
  name: string;
  url: string;
}
export interface ProductsState {
  detailsStatus: string;
  random_product: ProductDetails | null;
  all_products: ProductDetails[];
  categories: Categories[];
}
