import { useNavigate } from "react-router";
import { addToWishLists } from "../../features/products/productsSlice";
import { afterDiscount } from "../../utils/common-functions";
import StarRating from "../../components/StarRatings";

function ProductCard({
  item,
  wishlists,
  wishlistsEnable,
  deleteIconEnable,
  dispatch,
  customEventHandler
}: any) {
  const navigate = useNavigate();

  return (
    <>
      <div className="group relative rounded-[4px] cursor-pointer item">
        {/* Wishlist Icon */}
        {wishlistsEnable ? (
          <div
            className="right-0 z-1 absolute flex justify-center items-center bg-[var(--primary)] m-2 px-4 py-2 rounded-full w-3 h-8"
            onClick={() => dispatch(addToWishLists(item))}
          >
            {wishlists.includes(item.id) ? (
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
        ) : (
          ""
        )}

        {/* Delete icon */}
        {deleteIconEnable ? (
          <div
            className="right-0 z-1 absolute flex justify-center items-center bg-[var(--primary)] m-2 p-2 rounded-full w-10 h-10"
            onClick={() => customEventHandler(item.id)}
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M7.99902 4.25C7.99902 3.00736 9.00638 2 10.249 2H13.749C14.9917 2 15.999 3.00736 15.999 4.25V5H18.498C19.7407 5 20.748 6.00736 20.748 7.25C20.748 8.28958 20.043 9.16449 19.085 9.42267C18.8979 9.4731 18.7011 9.5 18.498 9.5H5.5C5.29694 9.5 5.10016 9.4731 4.91303 9.42267C3.95503 9.16449 3.25 8.28958 3.25 7.25C3.25 6.00736 4.25736 5 5.5 5H7.99902V4.25ZM14.499 5V4.25C14.499 3.83579 14.1632 3.5 13.749 3.5H10.249C9.83481 3.5 9.49902 3.83579 9.49902 4.25V5H14.499Z"
                fill="#323544"
              />
              <path
                d="M4.97514 10.4578L5.54076 19.8848C5.61205 21.0729 6.59642 22 7.78672 22H16.2113C17.4016 22 18.386 21.0729 18.4573 19.8848L19.0229 10.4578C18.8521 10.4856 18.6767 10.5 18.498 10.5H5.5C5.32131 10.5 5.146 10.4856 4.97514 10.4578ZM10.774 13.4339L10.9982 17.9905C11.0185 18.4042 10.6996 18.7561 10.2859 18.7764C9.8722 18.7968 9.52032 18.4779 9.49997 18.0642L9.27581 13.5076C9.25546 13.0938 9.57434 12.742 9.98805 12.7216C10.4018 12.7013 10.7536 13.0201 10.774 13.4339ZM14.0101 12.7216C14.4238 12.742 14.7427 13.0938 14.7223 13.5076L14.4982 18.0642C14.4778 18.4779 14.1259 18.7968 13.7122 18.7764C13.2985 18.7561 12.9796 18.4042 13 17.9905L13.2241 13.4339C13.2445 13.0201 13.5964 12.7013 14.0101 12.7216Z"
                fill="#323544"
              />
            </svg>
          </div>
        ) : (
          ""
        )}

        {/* Product Image and Discount */}
        <div
          className="flex justify-center bg-[var(--secondary)] w-auto h-auto overflow-hidden"
          onClick={() => navigate(`/product/${item.id}/`)}
        >
          <div className="relative">
            <span className="left-0 absolute flex justify-center items-center bg-[var(--button-bg)] m-2 rounded-[4px] w-[60px] h-[26px] text-[12px] text-[var(--primary)]">
              -{item.discountPercentage}%
            </span>
            <img
              src={item.images[0]}
              alt=""
              className="rounded-[4px] w-[clamp(156px,25vw,256px)] h-[clamp(156px,25vw,256px)] object-cover"
            />

            {/* Add to Cart */}
            <span className="bottom-0 absolute flex justify-center items-center group-hover:bg-[var(--primary1)] px-4 py-2 w-full h-8 text-[var(--primary)]">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M2.31641 3.25C1.90219 3.25 1.56641 3.58579 1.56641 4C1.56641 4.41421 1.90219 4.75 2.31641 4.75H3.49696C3.87082 4.75 4.18759 5.02534 4.23965 5.39556L5.49371 14.3133C5.6499 15.424 6.60021 16.25 7.72179 16.25L18.0664 16.25C18.4806 16.25 18.8164 15.9142 18.8164 15.5C18.8164 15.0858 18.4806 14.75 18.0664 14.75L7.72179 14.75C7.34793 14.75 7.03116 14.4747 6.9791 14.1044L6.85901 13.2505H17.7114C18.6969 13.2505 19.5678 12.6091 19.8601 11.668L21.7824 5.48032C21.8531 5.25268 21.8114 5.00499 21.6701 4.81305C21.5287 4.62112 21.3045 4.50781 21.0662 4.50781H5.51677C5.14728 3.75572 4.37455 3.25 3.49696 3.25H2.31641ZM5.84051 6.00781L6.64807 11.7505H17.7114C18.0399 11.7505 18.3302 11.5367 18.4277 11.223L20.0478 6.00781H5.84051Z"
                  fill="#fff"
                />
                <path
                  d="M7.78418 17.75C6.81768 17.75 6.03418 18.5335 6.03418 19.5C6.03418 20.4665 6.81768 21.25 7.78418 21.25C8.75068 21.25 9.53428 20.4665 9.53428 19.5C9.53428 18.5335 8.75068 17.75 7.78418 17.75Z"
                  fill="#fff"
                />
                <path
                  d="M14.5703 19.5C14.5703 18.5335 15.3538 17.75 16.3203 17.75C17.2868 17.75 18.0704 18.5335 18.0704 19.5C18.0704 20.4665 17.2869 21.25 16.3204 21.25C15.3539 21.25 14.5703 20.4665 14.5703 19.5Z"
                  fill="#fff"
                />
              </svg>{" "}
              &nbsp; Add To Cart
            </span>
          </div>
        </div>

        {/* Title, Price and Rating */}
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
    </>
  );
}

export default ProductCard;
