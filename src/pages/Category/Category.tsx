import { useEffect } from "react";
import { useProducts } from "../../store/useProducts";
import { getCategories } from "../../store/productsThunk";
import Button from "../../components/Button";
function Category() {
  const { dispatch, categories } = useProducts();

  useEffect(() => {
    dispatch(getCategories());
  }, []);
  return (
    <>
      <div className="m-auto w-[80%]">
      <div className="my-5 pb-3 text-3xl decoration-[var(--button-bg)] underline underline-offset-12">Browse By Category</div>
        <div className="justify-center gap-5 grid grid-cols-5">
          {Array.isArray(categories) &&
            categories.map((item, i) => (
              <div
                key={i}
                className="flex justify-center items-center cursor-pointer"
              >
                <Button text={item.name} />
              </div>
            ))}
        </div>
      </div>
    </>
  );
}

export default Category;
