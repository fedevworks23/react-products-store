import { useEffect, useState } from "react";

function CartListTotal({ cart }: any) {
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {    
    const totalPrice = cart.reduce(
      (acc: any, curr: any) => acc + curr.price * curr.quantity,
      0
    );
    setTotalPrice(totalPrice); // Update the total price state when the cart changes. This will re-render the component with the new total price.
  }, [cart]);
  return (
    <>
      <div className="flex mt-15">
        <div className="flex-2/3"></div>
        <div className="flex-1/3 p-3 border-1 border-black rounded-sm w-fit leading-[2.5]">
          <div className="text-xl">Cart Total</div>
          <div className="flex justify-between text-md">
            <span>Sub Total:</span>
            <span>$ {totalPrice.toFixed(2)}</span>
          </div>
          <hr className="opacity-40" />
          <div className="flex justify-between text-md">
            <span>Items:</span>
            <span>{cart.length}</span>
          </div>
          <hr className="opacity-40" />
          <div className="flex justify-between text-md">
            <span>Total:</span>
            <span>$ {totalPrice.toFixed(2)}</span>
          </div>
        </div>
      </div>
    </>
  );
}

export default CartListTotal;
