import { Link, NavLink, useNavigate } from "react-router";
import { useProducts } from "../store/useProducts";

function Navbar() {
  const navigate = useNavigate();
  const { wishlists } = useProducts();

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
          </div>
        </div>

        <div className="opacity-30 border-b-1 border-b-black"></div>
      </nav>
    </>
  );
}

export default Navbar;
