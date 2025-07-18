import { useEffect } from "react";
import PageHeading from "../../components/PageHeading";
import { useProducts } from "../../store/useProducts";
import type { ProductDetails } from "../../types/ProductDetails";
import CartListTotal from "./CartListTotal";
import {
  addToCartLists,
  deleteFromCartLists,
} from "../../features/products/productsSlice";

function CartList() {
  const { cart_lists, dispatch } = useProducts();

  const handleDeleteFromCartList = (productId: number) => {
    const result = cart_lists.filter((item) => item?.id !== productId);
    dispatch(deleteFromCartLists(result));
  };

  const updateQuantity = (id: number, quantity: number) => {
    const updatedCart = cart_lists.map((item) =>
      item.id === id ? { ...item, quantity: item.quantity + quantity } : item
    );
    dispatch(addToCartLists(updatedCart));
  };

  useEffect(() => {}, []);
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
        cart_lists.map(
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
                <div className="relative flex flex-4/12 items-center">
                  <span
                    className="top-2.5 absolute cursor-pointer"
                    onClick={() => handleDeleteFromCartList(id)}
                  >
                    <svg
                      width="24"
                      height="25"
                      viewBox="0 0 24 25"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M2 12.3906C2 6.86778 6.47715 2.39062 12 2.39062C17.5228 2.39062 22 6.86778 22 12.3906C22 17.9135 17.5228 22.3906 12 22.3906C6.47715 22.3906 2 17.9135 2 12.3906ZM8.78362 10.2354L10.9388 12.3906L8.78362 14.5458C8.49073 14.8387 8.49073 15.3136 8.78362 15.6065C9.07652 15.8994 9.55139 15.8994 9.84428 15.6065L11.9995 13.4513L14.1546 15.6064C14.4475 15.8993 14.9224 15.8993 15.2153 15.6064C15.5082 15.3135 15.5082 14.8387 15.2153 14.5458L13.0602 12.3906L15.2153 10.2355C15.5082 9.94258 15.5082 9.46771 15.2153 9.17482C14.9224 8.88192 14.4475 8.88192 14.1546 9.17482L11.9995 11.33L9.84428 9.17475C9.55139 8.88186 9.07652 8.88186 8.78362 9.17475C8.49073 9.46764 8.49073 9.94251 8.78362 10.2354Z"
                        fill="#DB4444"
                      />
                    </svg>
                  </span>
                  {images && images.length > 0 ? (
                    <img
                      src={images[0]}
                      alt={title}
                      className="w-[clamp(70px,0.2vw,70vw)] h-auto"
                    />
                  ) : (
                    ""
                  )}

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
                    {quantity && (
                      <input
                        readOnly
                        value={quantity.toString().padEnd(2, "0")}
                        className="focus:outline-none w-12 font-semibold text-center"
                      />
                    )}

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

      {cart_lists && cart_lists.length > 0 && (
        <CartListTotal cart={cart_lists} />
      )}
    </>
  );
}

export default CartList;
