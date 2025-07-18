import { useEffect } from "react";
import { useProducts } from "../../store/useProducts";
import type { ProductDetails } from "../../types/ProductDetails";
import ProductCard from "../Products/ProductCard";
import { deleteFromWishLists } from "../../features/products/productsSlice";
import PageHeading from "../../components/PageHeading";

function Wishlists() {
  const { wishlists, dispatch } = useProducts();

  const handleDeleteWishlist = (productId: number) => {
    const result = wishlists.filter((item) => item?.id !== productId);
    dispatch(deleteFromWishLists(result));
  };

  useEffect(() => {}, [wishlists]);
  return (
    <>
      <PageHeading title={`Wishlist ( ${wishlists.length} )`} />

      <div className="gap-5 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4">
        {Array.isArray(wishlists) &&
          wishlists.map((item: ProductDetails, i) => (
            <ProductCard
              key={i}
              item={item}
              dispatch={dispatch}
              wishlistsEnable={false}
              deleteIconEnable={true}
              handleDeleteWishlist={handleDeleteWishlist}
            />
          ))}
      </div>
    </>
  );
}

export default Wishlists;
