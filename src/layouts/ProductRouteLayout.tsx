import React from "react";
import { Routes, Route } from "react-router";

const Home = React.lazy(() => import("../pages/Home"));
const AllProducts = React.lazy(() => import("../pages/Products/AllProducts"));
const Category = React.lazy(() => import("../pages/Category/Category"));
const About = React.lazy(() => import("../pages/About/About"));
const NotFound = React.lazy(() => import("../pages/NotFound/NotFound"));

function ProductRouteLayout() {
  return (
    <>
      <Routes>
        <Route index element={<Home />} />
        <Route path={'products'} element={<AllProducts />} />
        <Route path={'category'} element={<Category />} />
        <Route path={'about'} element={<About />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default ProductRouteLayout;
