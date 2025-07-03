import { useDispatch } from "react-redux";
import type { AppDispatch, RootState } from "../store";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import { getAllProducts } from "../store/productsThunk";
import type { Product } from "../types/productTypes";

function Home() {
  const dispatch = useDispatch<AppDispatch>();

  const { all_products } = useSelector(
    (state: RootState) => state.products
  ) as { all_products: Product[] };

  useEffect(() => {
    dispatch(getAllProducts());
  }, [dispatch]);
  return (
    <>
      <div>Home</div>
      Increment
      <div>
        {all_products.map((item, i) => (
          <div key={i}>
            {" "}
            {item.title} | {item.category}{" "}
          </div>
        ))}
      </div>
    </>
  );
}

export default Home;
