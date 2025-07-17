import { Link, NavLink, useNavigate } from "react-router";
import { useProducts } from "../store/useProducts";

function Navbar() {
  const navigate = useNavigate();
  const { wishlists, cart_lists } = useProducts();

  const navbarList = [
    {
      path: "/",
      label: "Home",
      to: "/",
    },
    {
      path: "/products",
      label: "Products",
      to: "/products",
    },
    {
      path: "/category",
      label: "Category",
      to: "/category",
    },
    {
      path: "/about",
      label: "About",
      to: "/about",
    },
  ];

  return (
    <>
      <nav>
        <div className="flex items-center bg-[var(--primary)] py-4">
          <div className="flex flex-2/12 justify-center font-black brand">
            <Link to={"/"}>PRODUCTS</Link>
          </div>
          <div className="flex flex-6/12 justify-evenly">
            {navbarList.map(({ label, to }, i) => (
              <NavLink
                key={i}
                to={to}
                className={({ isActive }) =>
                  isActive
                    ? "text-[var(--button-bg)] font-semibold border-b-1"
                    : "text-[var(--primary1)]  hover:text-[var(--hover-button-bg)] border-b-transparent"
                }
              >
                {label}
              </NavLink>
            ))}
          </div>
          <div className="flex flex-4/12">
            <div>
              <input
                type="search"
                className="bg-[var(--secondary)] px-4 py-1 border-1 rounded-[4px] focus:outline-[none] focus:ring-[var(--button-bg)] focus:ring-1"
                placeholder="Search Product"
              />
            </div>

            {/* Wishlist */}

            <div
              className="relative flex justify-center items-center ml-1 p-1.5 w-[30px] cursor-pointer"
              onClick={() => navigate(`/wishlists`)}
            >
              {wishlists.length > 0 ? (
                <div className="top-0 -right-1 z-10 absolute flex justify-center items-center bg-red-500 rounded-full w-4 h-4 text-[10px] text-white">
                  {wishlists.length}
                </div>
              ) : (
                ""
              )}

              {wishlists.length > 0 ? (
                <svg
                  className="absolute"
                  width="30"
                  height="30"
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
                  width="30"
                  height="30"
                  viewBox="0 0 24 24"
                  fill="none"
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

            {/* Cart */}
            <div
              className="relative flex justify-center items-center ml-1 p-1.5 w-[30px] cursor-pointer"
              onClick={() => navigate(`/cart`)}
            >
              {cart_lists.length > 0 ? (
                <div className="top-0 -right-1 z-10 absolute flex justify-center items-center bg-red-500 rounded-full w-4 h-4 text-[10px] text-white">
                  {cart_lists.length}
                </div>
              ) : (
                ""
              )}

              <svg
              className="absolute"
                width="30"
                height="30"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M2.31641 3.25C1.90219 3.25 1.56641 3.58579 1.56641 4C1.56641 4.41421 1.90219 4.75 2.31641 4.75H3.49696C3.87082 4.75 4.18759 5.02534 4.23965 5.39556L5.49371 14.3133C5.6499 15.424 6.60021 16.25 7.72179 16.25L18.0664 16.25C18.4806 16.25 18.8164 15.9142 18.8164 15.5C18.8164 15.0858 18.4806 14.75 18.0664 14.75L7.72179 14.75C7.34793 14.75 7.03116 14.4747 6.9791 14.1044L6.85901 13.2505H17.7114C18.6969 13.2505 19.5678 12.6091 19.8601 11.668L21.7824 5.48032C21.8531 5.25268 21.8114 5.00499 21.6701 4.81305C21.5287 4.62112 21.3045 4.50781 21.0662 4.50781H5.51677C5.14728 3.75572 4.37455 3.25 3.49696 3.25H2.31641ZM5.84051 6.00781L6.64807 11.7505H17.7114C18.0399 11.7505 18.3302 11.5367 18.4277 11.223L20.0478 6.00781H5.84051Z"
                  fill="#323544"
                />
                <path
                  d="M7.78418 17.75C6.81768 17.75 6.03418 18.5335 6.03418 19.5C6.03418 20.4665 6.81768 21.25 7.78418 21.25C8.75068 21.25 9.53428 20.4665 9.53428 19.5C9.53428 18.5335 8.75068 17.75 7.78418 17.75Z"
                  fill="#323544"
                />
                <path
                  d="M14.5703 19.5C14.5703 18.5335 15.3538 17.75 16.3203 17.75C17.2868 17.75 18.0704 18.5335 18.0704 19.5C18.0704 20.4665 17.2869 21.25 16.3204 21.25C15.3539 21.25 14.5703 20.4665 14.5703 19.5Z"
                  fill="#323544"
                />
              </svg>
            </div>
          </div>
        </div>

        <div className="opacity-30 border-b-1 border-b-black"></div>
      </nav>
    </>
  );
}

export default Navbar;
