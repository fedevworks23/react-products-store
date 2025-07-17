import React from "react";
import { Routes, Route } from "react-router";

const Home = React.lazy(() => import("../pages/Home"));

const ProductLists = React.lazy(() => import("../pages/Products/ProductLists"));
const ProductDetails = React.lazy(
  () => import("../pages/Products/ProductDetails")
);
const Category = React.lazy(() => import("../pages/Category/Category"));
const About = React.lazy(() => import("../pages/About/About"));
const Wishlists = React.lazy(() => import("../pages/Wishlists/Wishlists"));
const CartList = React.lazy(() => import("../pages/Cart/CartList"));
const NotFound = React.lazy(() => import("../pages/NotFound/NotFound"));

function ProductRouteLayout() {
  return (
    <>
      <Routes>
        <Route index element={<Home />} />
        <Route path={"products"} element={<ProductLists />} />
        <Route path={"product/:id"} element={<ProductDetails />} />
        <Route path={"category"} element={<Category />} />
        <Route path={"about"} element={<About />} />
        <Route path={"wishlists"} element={<Wishlists />} />
        <Route path={"cart"} element={<CartList />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default ProductRouteLayout;
