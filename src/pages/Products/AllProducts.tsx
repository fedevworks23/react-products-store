import { useEffect } from "react";
import { getAllProducts } from "../../store/productsThunk";
import type { ProductDetails } from "../../types/ProductDetails";
import { useProducts } from "../../store/useProducts";
import StarRating from "../../components/StarRatings";

function AllProducts() {
  const { all_products, dispatch } = useProducts();

  const afterDiscount = ({ price, discountPercentage }: any) => {
    console.log(price, discountPercentage);
    return Math.floor(price * (1 - discountPercentage / 100));
  };

  useEffect(() => {
    dispatch(getAllProducts());
  }, []);
  return (
    <>
      <div className="m-auto w-[80%]">
        <div className="my-5 pb-3 text-3xl decoration-[var(--button-bg)] underline underline-offset-12">
          All Products
        </div>

        <div className="gap-5 grid grid-cols-4">
          {Array.isArray(all_products) &&
            all_products.map((item: ProductDetails, i) => (
              <div key={i} className="cursor-pointer item">
                <div className="relative bg-[var(--secondary)] w-3xs">
                  <span className="right-0 absolute flex justify-center items-center bg-amber-300 m-2 px-4 py-2 rounded-full w-3 h-8">9</span>
                  <img src={item.images[0]} alt="" />
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
