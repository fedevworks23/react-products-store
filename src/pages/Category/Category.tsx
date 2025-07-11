import { useEffect } from "react";
import { useProducts } from "../../store/useProducts";
import { getCategories } from "../../store/productsThunk";
import Button from "../../components/Button";
import PageHeading from "../../components/PageHeading";
function Category() {
  const { dispatch, categories } = useProducts();

  useEffect(() => {
    dispatch(getCategories());
  }, []);
  return (
    <>
      <PageHeading title={"Browse By Category"} />
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
    </>
  );
}

export default Category;
