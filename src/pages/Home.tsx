import { useEffect } from "react";
import { getRandomProduct } from "../store/productsThunk";
import HorizontalRule from "../components/HorizontalRule";
import { useProducts } from "../store/useProducts";

function Home() {
  const { random_product, dispatch } = useProducts();

  useEffect(() => {
    const randomNumber = Math.floor(Math.random() * 100) + 1;
    dispatch(getRandomProduct(randomNumber.toString()));
  }, []);

  return (
    <>
      <div>
        {random_product && (
          <div className="flex md:flex-row flex-col items-center m-auto w-[clamp(300px,80vw,900px)]">
            <img
              src={random_product.thumbnail}
              alt={random_product.title}
              className="rounded w-[clamp(100px, h-auto 50vw, 380px)]"
            />
            <div>
              <h2 className="text-[clamp(1.2rem,3vw,1.5rem)]">
                {random_product.title}
              </h2>
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
