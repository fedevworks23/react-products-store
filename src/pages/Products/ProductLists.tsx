import { useEffect, useState } from "react";
import { getAllProducts } from "../../store/productThunk";
import type { ProductDetails } from "../../types/ProductDetails";
import { useProducts } from "../../store/useProducts";
import Pagination from "./Pagination";
import HorizontalRule from "../../components/HorizontalRule";
import FilterProducts from "./FilterProducts";
import { setProductFilters } from "../../features/products/productsSlice";
import ProductCard from "./ProductCard";
import PageHeading from "../../components/PageHeading";

function ProductLists() {
  const { all_products, product_filters, dispatch } = useProducts();

  useEffect(() => {
    dispatch(getAllProducts());
  }, []);

  const [sortOrderType, setSortOrderType] = useState("asc");

  const [sortedProducts, setSortedProducts] = useState(all_products);

  useEffect(() => {
    if (sortOrderType === "asc") {
      setSortedProducts([...all_products].sort((a, b) => a.price - b.price));
    } else if (sortOrderType === "desc") {
      setSortedProducts([...all_products].sort((a, b) => b.price - a.price));
    }
  }, [all_products, sortOrderType]);

  const lastProductIndex =
    Number(product_filters?.current_page) * Number(product_filters?.per_page);
  const firstProductIndex =
    lastProductIndex - Number(product_filters?.per_page);
  const currentProducts = sortedProducts.slice(
    firstProductIndex,
    lastProductIndex
  );

  return (
    <>
      <div>
        <PageHeading title={"All Products"} />

        <FilterProducts
          productsPerPage={product_filters?.per_page}
          setProductsPerPage={(value: any) =>
            dispatch(
              setProductFilters({
                ...product_filters,
                per_page: value,
                current_page: 1,
              })
            )
          }
          sortOrderType={sortOrderType}
          setSortOrderType={setSortOrderType}
        />

        <HorizontalRule />

        <div className="gap-5 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4">
          {Array.isArray(currentProducts) &&
            currentProducts.map((item: ProductDetails, i) => (
              <ProductCard
                key={i}
                item={item}
                wishlistsEnable={true}
                deleteIconEnable={false}
              />
            ))}
        </div>

        <HorizontalRule />

        <Pagination
          totalProducts={all_products.length}
          productsPerPage={product_filters?.per_page}
          currentPage={product_filters?.current_page}
          setCurrentPage={(value: any) =>
            dispatch(
              setProductFilters({ ...product_filters, current_page: value })
            )
          }
        />

        <div className="flex justify-center mt-8"> </div>
      </div>
    </>
  );
}

export default ProductLists;
