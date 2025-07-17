import { useEffect, useState } from "react";
import PageHeading from "../../components/PageHeading";
import { useProducts } from "../../store/useProducts";
import type { ProductDetails } from "../../types/ProductDetails";
import CartListTotal from "./CartListTotal";

function CartList() {
  const { cart_lists } = useProducts();
  const updatedField = cart_lists.map((item) => ({
    ...item,
    quantity: item.minimumOrderQuantity,
  }));

  const [cartList, setCartList] = useState<ProductDetails[]>(updatedField);

  const updateQuantity = (id: number, quantity: number) => {
    setCartList((prev) =>
      prev.map((p) => {
        return p.id === id
          ? {
              ...p,
              quantity: Math.max(1, p.quantity + quantity),
            }
          : p;
      })
    );
  };

  useEffect(() => {}, [cart_lists]);
  return (
    <>
      <PageHeading title={`Cart ( ${cart_lists.length} )`} />

      <div className="flex justify-center items-center shadow-lg/10 mb-2 px-6 rounded-[4px] h-[72px]">
        <div className="flex-4/12">Product</div>
        <div className="flex-2/12">Price</div>
        <div className="flex-3/12">Quantity</div>
        <div className="flex flex-3/12 justify-end">Subtotal</div>
      </div>
      {Array.isArray(cart_lists) &&
        cartList.map(
          (
            {
              id,
              price,
              images,
              title,
              minimumOrderQuantity,
              quantity,
              stock,
            }: ProductDetails,
            i
          ) => {
            {
              JSON.stringify(quantity);
            }
            const total = price * quantity;
            return (
              <div
                key={i}
                className="flex justify-center items-center shadow-lg/10 mb-2 px-6 rounded-[4px] h-[72px]"
              >
                {/* Title */}
                <div className="flex flex-4/12 items-center">
                  <img
                    src={images[0]}
                    alt={title}
                    className="w-[clamp(70px,0.2vw,70vw)] h-auto"
                  />
                  {title}
                </div>

                {/* Price */}
                <span className="flex-2/12">{price}</span>

                {/* minimumOrderQuantity */}
                <span className="flex-3/12">
                  <div
                    className={`flex items-center px-2 py-1 border border-gray-400 rounded-md w-fit
                      ${
                        stock <= minimumOrderQuantity
                          ? "bg-gray-500"
                          : "bg-white"
                      }`}
                  >
                    <input
                      readOnly
                      value={quantity.toString().padStart(2, "0")}
                      className="focus:outline-none w-12 font-semibold text-center"
                    />
                    <div className="flex flex-col ml-4">
                      <button
                        onClick={() => updateQuantity(id, 1)}
                        disabled={quantity >= stock}
                        className="hover:text-blue-500 text-xs cursor-pointer"
                      >
                        <svg
                          width="25"
                          height="24"
                          viewBox="0 0 25 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M19.1085 14.9053C18.8156 15.1982 18.3407 15.1982 18.0478 14.9053L12.3281 9.18566L6.60845 14.9053C6.31556 15.1982 5.84069 15.1982 5.5478 14.9053C5.2549 14.6124 5.2549 14.1376 5.5478 13.8447L11.7978 7.59467C12.0907 7.30178 12.5656 7.30178 12.8585 7.59467L19.1085 13.8447C19.4013 14.1376 19.4013 14.6124 19.1085 14.9053Z"
                            fill={quantity >= stock ? "#ffffff" : "#323544"}
                          />
                        </svg>
                      </button>
                      <button
                        onClick={() => updateQuantity(id, -1)}
                        disabled={quantity <= minimumOrderQuantity}
                        className="hover:text-blue-500 text-xs cursor-pointer"
                      >
                        <svg
                          width="25"
                          height="24"
                          viewBox="0 0 25 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M5.54779 9.09467C5.84069 8.80178 6.31556 8.80178 6.60846 9.09467L12.3281 14.8143L18.0478 9.09467C18.3407 8.80178 18.8156 8.80178 19.1085 9.09467C19.4013 9.38756 19.4013 9.86244 19.1085 10.1553L12.8585 16.4053C12.5656 16.6982 12.0907 16.6982 11.7978 16.4053L5.54779 10.1553C5.2549 9.86244 5.2549 9.38756 5.54779 9.09467Z"
                            fill={
                              quantity === minimumOrderQuantity
                                ? "#ffffff"
                                : "#323544"
                            }
                          />
                        </svg>
                      </button>
                    </div>
                  </div>
                </span>

                {/* Subtotal */}
                <span className="flex flex-3/12 justify-end">
                  {total.toFixed(2)}
                </span>
              </div>
            );
          }
        )}

      {cartList && cartList.length > 0 && <CartListTotal cart={cartList} />}
    </>
  );
}

export default CartList;
