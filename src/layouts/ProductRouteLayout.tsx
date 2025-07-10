import React from "react";
import { Routes, Route } from "react-router";

const Home = React.lazy(() => import("../pages/Home"));

const AllProducts = React.lazy(() => import("../pages/Products/AllProducts"));
const ProductOverview = React.lazy(
  () => import("../pages/Products/ProductOverview")
);
const Category = React.lazy(() => import("../pages/Category/Category"));
const About = React.lazy(() => import("../pages/About/About"));
const Wishlists = React.lazy(() => import("../pages/Wishlists/Wishlists"));
const NotFound = React.lazy(() => import("../pages/NotFound/NotFound"));

function ProductRouteLayout() {
  return (
    <>
      <Routes>
        <Route index element={<Home />} />
        <Route path={"products"} element={<AllProducts />} />
        <Route path={"product/:id"} element={<ProductOverview />} />
        <Route path={"category"} element={<Category />} />
        <Route path={"about"} element={<About />} />
        <Route path={"wishlists"} element={<Wishlists />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default ProductRouteLayout;
