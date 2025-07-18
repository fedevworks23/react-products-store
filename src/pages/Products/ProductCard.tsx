import { useNavigate } from "react-router";
import { afterDiscount } from "../../utils/common-functions";
import StarRating from "../../components/StarRatings";
import CartListIcon from "../Cart/CartListIcon";
import WishListIcon from "../Wishlists/WishListIcon";

function ProductCard({
  item,
  wishlistsEnable,
  deleteIconEnable,
  handleDeleteWishlist,
}: any) {
  const navigate = useNavigate();

  return (
    <>
      <div className="group relative rounded-[4px] cursor-pointer item">
        {/* Wishlist Icon */}
        {wishlistsEnable && <WishListIcon item={item} />}
        {/* Delete icon */}
        {deleteIconEnable && (
          <div
            className="right-0 z-1 absolute flex justify-center items-center bg-[var(--primary)] m-2 p-2 rounded-full w-10 h-10"
            onClick={() => handleDeleteWishlist(item.id)}
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
        )}
        {/* Add to Cart */}
        <CartListIcon item={item} />
        {/* Product Image and Discount */}
        <div className="flex justify-center bg-[var(--secondary)] w-auto h-auto overflow-hidden">
          <span className="left-0 absolute flex justify-center items-center bg-[var(--button-bg)] m-2 rounded-[4px] w-[60px] h-[26px] text-[12px] text-[var(--primary)]">
            -{item.discountPercentage}%
          </span>
          <img
            src={item.images[0]}
            alt=""
            className="rounded-[4px] w-[clamp(156px,25vw,256px)] h-[clamp(156px,25vw,256px)] object-cover"
          />
        </div>
        {/* Title, Price and Rating */}
        <div
          className="flex flex-col mt-3"
          onClick={() => navigate(`/product/${item.id}/`)}
        >
          <span className="font-medium text-[16px] truncate">{item.title}</span>
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
