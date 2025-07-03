import { useDispatch } from "react-redux";
import type { AppDispatch, RootState } from "../store";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import {  getRandomProduct } from "../store/productsThunk";
import type { Product } from "../types/productTypes";
import HorizontalRule from "../components/HorizontalRule";

function Home() {
  const dispatch = useDispatch<AppDispatch>();

  const { all_products, random_product } = useSelector(
    (state: RootState) => state.products
  );

  useEffect(() => {
    const randomNumber = Math.floor(Math.random() * 100) + 1;
    dispatch(getRandomProduct(randomNumber.toString()));
  }, []);
  
  return (
    <>
      <div>
        {random_product && (
          <div className="flex md:flex-row flex-col items-center m-auto w-[clamp(300px,80vw,900px)]">
            <img src={random_product.thumbnail} alt={random_product.title} className="rounded w-[clamp(100px, h-auto 50vw, 380px)]" />
            <div>
              <h2 className="text-[clamp(1.2rem,3vw,1.5rem)]">{random_product.title}</h2>
              <p>{random_product.description}</p>
              <p>Brand: {random_product.brand}</p>
              <p>Category: {random_product.category}</p>
              <p className="text-2xl">Price: $ {random_product.price}</p>
            </div>
            {/* Add more fields as needed */}
          </div>
        )}
      </div>

      <HorizontalRule />
    </>
  );
}

export default Home;
