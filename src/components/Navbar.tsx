import { Link } from "react-router";

function Navbar() {
  return (
    <>
      <nav>
        <div className="flex bg-[var(--primary)] pt-6 pb-4">
          <div className="flex flex-2/12 justify-center font-black brand">
            <Link to={'/'}>PRODUCTS</Link>
          </div>
          <div className="flex flex-6/12 justify-evenly">
            <Link to={'/'}>Home</Link>
            <Link to={'products'}>Products</Link>
            <Link to={'category'}>Category</Link>
            <Link to={'about'}>About</Link>
          </div>
          <div className="flex-4/12">
            <input
              type="search"
              className="border-1"
              placeholder="Search Product"
            />
          </div>
        </div>

        <div className="opacity-30 border-b-1 border-b-black"></div>
      </nav>
    </>
  );
}

export default Navbar;
