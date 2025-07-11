import { Outlet } from "react-router";
import Navbar from "./components/Navbar";
import ProductRouteLayout from "./layouts/ProductRouteLayout";

function App() {
  return (
    <>
      <div>
        <Navbar />
        <div className="m-auto w-[80%]">
          <ProductRouteLayout />
        </div>
        <Outlet />
      </div>
    </>
  );
}

export default App;
