import { addToWishLists } from "../../features/products/productsSlice";
import { useProducts } from "../../store/useProducts";
import type { ProductDetails } from "../../types/ProductDetails";

function WishListIcon({ item }: any) {
  const { wishlists, dispatch } = useProducts();
  const handleAddToWishlists = (item: ProductDetails) => {
    if (!Array.isArray(wishlists)) return;
    if (wishlists.some((w: any) => w.id === Number(item.id))) return;
    dispatch(addToWishLists(item));
  };

  return (
    <>
      <div
        className="right-0 z-1 absolute flex justify-center items-center bg-[var(--primary)] m-2 px-4 py-2 rounded-full w-3 h-8"
        onClick={() => handleAddToWishlists(item)}
      >
        {Array.isArray(wishlists) &&
        wishlists.some((w: any) => w.id === Number(item.id)) ? (
          <svg
            className="absolute"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M11.8227 4.77222C9.5756 2.52515 5.93237 2.52515 3.6853 4.77222C1.43823 7.01929 1.43823 10.6625 3.6853 12.9096L10.409 19.6334C11.2877 20.5121 12.7123 20.5121 13.591 19.6334L20.3147 12.9097C22.5618 10.6626 22.5618 7.01939 20.3147 4.77232C18.0676 2.52525 14.4244 2.52525 12.1773 4.77232L12 4.94959L11.8227 4.77222Z"
              fill="#323544"
            />
          </svg>
        ) : (
          <svg
            className="absolute"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="red"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M11.8227 4.77124L12 4.94862L12.1773 4.77135C14.4244 2.52427 18.0676 2.52427 20.3147 4.77134C22.5618 7.01842 22.5618 10.6616 20.3147 12.9087L13.591 19.6324C12.7123 20.5111 11.2877 20.5111 10.409 19.6324L3.6853 12.9086C1.43823 10.6615 1.43823 7.01831 3.6853 4.77124C5.93237 2.52417 9.5756 2.52417 11.8227 4.77124ZM10.762 5.8319C9.10073 4.17062 6.40725 4.17062 4.74596 5.8319C3.08468 7.49319 3.08468 10.1867 4.74596 11.848L11.4697 18.5718C11.7625 18.8647 12.2374 18.8647 12.5303 18.5718L19.254 11.8481C20.9153 10.1868 20.9153 7.49329 19.254 5.83201C17.5927 4.17072 14.8993 4.17072 13.238 5.83201L12.5304 6.53961C12.3897 6.68026 12.199 6.75928 12 6.75928C11.8011 6.75928 11.6104 6.68026 11.4697 6.53961L10.762 5.8319Z"
              fill="#323544"
            />
          </svg>
        )}
      </div>
    </>
  );
}

export default WishListIcon;
