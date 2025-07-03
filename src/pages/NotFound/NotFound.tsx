import { NavLink } from "react-router";
import Button from "../../components/Button";

function NotFound() {
  return (
    <>
      <div className="flex flex-col justify-center items-center h-[80vh]">
        <div className="text-[110px]">404 Not Found</div>
        <div className="mb-20 text-1xl">
          Your visited page not found. You may go home page.
        </div>

        <NavLink to={"/"}>
          <Button text={"Back to home page"} />
        </NavLink>
      </div>
    </>
  );
}

export default NotFound;
