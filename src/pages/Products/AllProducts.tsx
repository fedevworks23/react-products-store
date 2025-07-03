import { useEffect } from "react";
import { getAllProducts } from "../../store/productsThunk";
import { useDispatch } from "react-redux";
import type { AppDispatch, RootState } from "../../store";
import { useSelector } from "react-redux";
import type { Product } from "../../types/productTypes";

function AllProducts() {
  const dispatch = useDispatch<AppDispatch>();
  
  const { all_products } = useSelector(
    (state: RootState) => state.products
  );

  useEffect(() => {
    dispatch(getAllProducts());
  });
  return (
    <>
      <div>AllProducts</div>
      

      <div>
        {Array.isArray(all_products) &&
          all_products.map((item: Product, i) => (
            <div key={i}>
              {" "}
              {item.title} | {item.category}{" "}
            </div>
          ))}
      </div>
    </>
  );
}

export default AllProducts;
