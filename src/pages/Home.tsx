import { useEffect } from "react";
import { getRandomProduct } from "../store/productThunk";
import { useProducts } from "../store/useProducts";
import { useNavigate } from "react-router";

function Home() {
  const { random_product, dispatch } = useProducts();
  const navigate = useNavigate();

  useEffect(() => {
    const randomNumber = Math.floor(Math.random() * 100) + 1;
    dispatch(getRandomProduct(randomNumber.toString()));
  }, []);

  return (
    <>
      <div className="bg-gradient-to-br from-sky-500 to-indigo-600 shadow-xl/40 mt-10 px-8 py-20 rounded-2xl text-white text-center">
        <h1 className="font-bold text-4xl md:text-6xl">ShopSphere</h1>
        <p className="mt-4 font-medium text-xl md:text-2xl">
          Explore products & categories — Powered by DummyJSON
        </p>
        <button
          className="bg-white hover:bg-gray-100 mt-8 px-6 py-3 rounded font-semibold text-indigo-600 transition cursor-pointer"
          onClick={() => navigate("/products")}
        >
          Start Browsing
        </button>
      </div>

      <div>
        {random_product && (
          <div className="flex md:flex-row flex-col items-center bg-white shadow-xl/30 mx-auto -mt-8 rounded-2xl w-[clamp(300px,75vw,80vw)]">
            <img
              src={random_product.thumbnail}
              alt={random_product.title}
              className="rounded w-[clamp(100px,20vw,70vw)] h-auto"
            />
            <div className="px-5">
              <div className="text-[clamp(1.2rem,5vw,2rem)]">
                Featured Random
              </div>
              <h2 className="text-[clamp(1.2rem,6vw,3rem)]">
                {random_product.title}
              </h2>
              <p className="">{random_product.description}</p>
              <p className="text-2xl">Price: $ {random_product.price}</p>
            </div>
            {/* Add more fields as needed */}
          </div>
        )}
      </div>
    </>
  );
}

export default Home;
