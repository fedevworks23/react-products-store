import { Outlet } from "react-router";
import Navbar from "./components/Navbar";
import ProductRouteLayout from "./layouts/ProductRouteLayout";

function App() {
  return (
    <>
      <div>
        <Navbar />
        <ProductRouteLayout />
        <Outlet />
      </div>
    </>
  );
}

export default App;
