import { useEffect, useState } from "react";
import { getAllProducts } from "../../store/productsThunk";
import type { ProductDetails } from "../../types/ProductDetails";
import { useProducts } from "../../store/useProducts";
import StarRating from "../../components/StarRatings";
import Pagination from "./Pagination";
import HorizontalRule from "../../components/HorizontalRule";
import FilterProducts from "./FilterProducts";

function AllProducts() {
  const { all_products, dispatch } = useProducts();

  const afterDiscount = ({ price, discountPercentage }: any) => {
    return Math.floor(price * (1 - discountPercentage / 100));
  };

  useEffect(() => {
    dispatch(getAllProducts());
  }, []);

  const [currentPage, setCurrentPage] = useState(1);
  const [productsPerPage, setProductsPerPage] = useState(8);
  const [sortOrderType, setSortOrderType] = useState("asc");

  const [sortedProducts, setSortedProducts] = useState(all_products);

  useEffect(() => {
    if (sortOrderType === "asc") {
      setSortedProducts([...all_products].sort((a, b) => a.price - b.price));
    } else if (sortOrderType === "desc") {
      setSortedProducts([...all_products].sort((a, b) => b.price - a.price));
    }
  }, [all_products, productsPerPage, sortOrderType]);

  const lastProductIndex = currentPage * productsPerPage;
  const firstProductIndex = lastProductIndex - productsPerPage;
  const currentProducts = sortedProducts.slice(
    firstProductIndex,
    lastProductIndex
  );

  return (
    <>
      <div className="m-auto w-[80%]">
        <div className="my-5 pb-3 text-3xl decoration-[var(--button-bg)] underline underline-offset-12">
          All Products
        </div>

        <FilterProducts
          productsPerPage={productsPerPage}
          setProductsPerPage={setProductsPerPage}
          sortOrderType={sortOrderType}
          setSortOrderType={setSortOrderType}
        />

        <HorizontalRule />

        <Pagination
          totalProducts={all_products.length}
          productsPerPage={productsPerPage}
          setCurrentPage={setCurrentPage}
          currentPage={currentPage}
        />

        <div className="gap-5 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4">
          {Array.isArray(currentProducts) &&
            currentProducts.map((item: ProductDetails, i) => (
              <div key={i} className="group rounded-[4px] cursor-pointer item">
                <div className="relative bg-[var(--secondary)] w-3xs">
                  <span className="left-0 absolute flex justify-center items-center bg-[var(--button-bg)] m-2 rounded-[4px] w-[60px] h-[26px] text-[12px] text-[var(--primary)]">
                    -{item.discountPercentage}%
                  </span>
                  <span className="right-0 absolute flex justify-center items-center bg-[var(--primary)] m-2 px-4 py-2 rounded-full w-3 h-8">
                    <svg
                      className="absolute"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M11.8227 4.77124L12 4.94862L12.1773 4.77135C14.4244 2.52427 18.0676 2.52427 20.3147 4.77134C22.5618 7.01842 22.5618 10.6616 20.3147 12.9087L13.591 19.6324C12.7123 20.5111 11.2877 20.5111 10.409 19.6324L3.6853 12.9086C1.43823 10.6615 1.43823 7.01831 3.6853 4.77124C5.93237 2.52417 9.5756 2.52417 11.8227 4.77124ZM10.762 5.8319C9.10073 4.17062 6.40725 4.17062 4.74596 5.8319C3.08468 7.49319 3.08468 10.1867 4.74596 11.848L11.4697 18.5718C11.7625 18.8647 12.2374 18.8647 12.5303 18.5718L19.254 11.8481C20.9153 10.1868 20.9153 7.49329 19.254 5.83201C17.5927 4.17072 14.8993 4.17072 13.238 5.83201L12.5304 6.53961C12.3897 6.68026 12.199 6.75928 12 6.75928C11.8011 6.75928 11.6104 6.68026 11.4697 6.53961L10.762 5.8319Z"
                        fill="#323544"
                      />
                    </svg>
                  </span>
                  <div>
                    <img
                      src={item.images[0]}
                      alt=""
                      className="rounded-[4px] w-[clamp(156px,25vw,256px)] h-[clamp(156px,25vw,256px)] object-cover"
                    />

                    <span className="bottom-0 absolute flex justify-center items-center group-hover:bg-[var(--primary1)] px-4 py-2 w-full h-8 text-[var(--primary)]">
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M2.31641 3.25C1.90219 3.25 1.56641 3.58579 1.56641 4C1.56641 4.41421 1.90219 4.75 2.31641 4.75H3.49696C3.87082 4.75 4.18759 5.02534 4.23965 5.39556L5.49371 14.3133C5.6499 15.424 6.60021 16.25 7.72179 16.25L18.0664 16.25C18.4806 16.25 18.8164 15.9142 18.8164 15.5C18.8164 15.0858 18.4806 14.75 18.0664 14.75L7.72179 14.75C7.34793 14.75 7.03116 14.4747 6.9791 14.1044L6.85901 13.2505H17.7114C18.6969 13.2505 19.5678 12.6091 19.8601 11.668L21.7824 5.48032C21.8531 5.25268 21.8114 5.00499 21.6701 4.81305C21.5287 4.62112 21.3045 4.50781 21.0662 4.50781H5.51677C5.14728 3.75572 4.37455 3.25 3.49696 3.25H2.31641ZM5.84051 6.00781L6.64807 11.7505H17.7114C18.0399 11.7505 18.3302 11.5367 18.4277 11.223L20.0478 6.00781H5.84051Z"
                          fill="#fff"
                        />
                        <path
                          d="M7.78418 17.75C6.81768 17.75 6.03418 18.5335 6.03418 19.5C6.03418 20.4665 6.81768 21.25 7.78418 21.25C8.75068 21.25 9.53428 20.4665 9.53428 19.5C9.53428 18.5335 8.75068 17.75 7.78418 17.75Z"
                          fill="#fff"
                        />
                        <path
                          d="M14.5703 19.5C14.5703 18.5335 15.3538 17.75 16.3203 17.75C17.2868 17.75 18.0704 18.5335 18.0704 19.5C18.0704 20.4665 17.2869 21.25 16.3204 21.25C15.3539 21.25 14.5703 20.4665 14.5703 19.5Z"
                          fill="#fff"
                        />
                      </svg>{" "}
                      &nbsp; Add To Cart
                    </span>
                  </div>
                </div>
                <div className="flex flex-col mt-3">
                  <span className="text-[16px] truncate">{item.title}</span>
                  <span className="text-[16px]">
                    <span className="text-[var(--button-bg)]">
                      {" "}
                      ${" "}
                      {afterDiscount({
                        price: item.price,
                        discountPercentage: item.discountPercentage,
                      })}{" "}
                      &nbsp;
                    </span>
                    <span className="opacity-50 text-[var(#000000)] line-through">
                      {" "}
                      $ {item.price}{" "}
                    </span>
                  </span>
                  <span>
                    <StarRating rating={item.rating} maxStars={5} />{" "}
                  </span>
                </div>
              </div>
            ))}
        </div>
      </div>
    </>
  );
}

export default AllProducts;
