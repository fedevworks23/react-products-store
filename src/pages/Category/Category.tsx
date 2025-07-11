import { useEffect } from "react";
import { useProducts } from "../../store/useProducts";
import { getCategories } from "../../store/productsThunk";
import PageHeading from "../../components/PageHeading";
function Category() {
  const { dispatch, categories } = useProducts();

  useEffect(() => {
    dispatch(getCategories());
  }, []);
  return (
    <>
      <PageHeading title={"Browse By Category"} />
      <div className="justify-center gap-5 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 select-none">
        {Array.isArray(categories) &&
          categories.map((item, i) => (
            <div
              key={i}
              className="group flex flex-col justify-center items-center cursor-pointer"
            >
              <div className="flex justify-center items-center bg-[var(--primary)] group-hover:bg-[var(--button-bg)] border-[var(--button-bg)] border-1 rounded-full w-25 h-25 text-[var(--button-bg)] group-hover:text-[var(--primary)] text-3xl transition-all duration-300">
                a
              </div>
              <div className="mt-2 group-hover:text-[var(--button-bg)]">
                {item.name}
              </div>
            </div>
          ))}
      </div>
    </>
  );
}

export default Category;
