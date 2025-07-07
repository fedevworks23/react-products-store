function FilterProducts({
  productsPerPage,
  setProductsPerPage,
  sortOrderType,
  setSortOrderType,
}: any) {
  const perPageHandler = (value: string) => {
    setProductsPerPage(value);
  };

  const sortBy = (value: string) => {
    setSortOrderType(value);
  };

  const perPageOptions = ["8", "20", "30"];

  return (
    <>
      <div className="flex flex-wrap">
        <div className="flex items-center space-x-2">
          <span className="font-medium text-gray-700">Items Per Page</span>
          <select
            className="bg-[var(--secondary)] p-2.5 px-3 py-2 border-1 border-gray-400 rounded-[4px] focus:outline-0 w-auto cursor-pointer"
            value={productsPerPage}
            onChange={(e) => perPageHandler(e.target.value)}
          >
            {perPageOptions.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </div> 
        &nbsp;&nbsp;
        <div className="flex items-center space-x-2">
          <span className="font-medium text-gray-700">Sort Items By </span>
          <select
            className="bg-[var(--secondary)] p-2.5 px-3 py-2 border-1 border-gray-400 rounded-[4px] focus:outline-0 w-auto cursor-pointer"
            value={sortOrderType}
            onChange={(e) => sortBy(e.target.value)}
          >
            <option value="asc" disabled={sortOrderType === "asc"}>
              Price Low to High
            </option>
            <option value="desc" disabled={sortOrderType === "desc"}>
              Price High to Low{" "}
            </option>
          </select>
        </div>
      </div>
    </>
  );
}

export default FilterProducts;
