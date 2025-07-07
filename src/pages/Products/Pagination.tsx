function Pagination({
  totalProducts,
  productsPerPage,
  setCurrentPage,
  currentPage,
}: any) {
  // const totalProducts = 100;
  // const productsPerPage = 10;
  const pages = [];
  for (let i = 1; i <= Math.ceil(totalProducts / productsPerPage); i++) {
    pages.push(i);
  }
  return (
    <>
      <div className="flex flex-wrap justify-center">
        {pages.map((page, index) => (
          <button
            key={index}
            className={`bg-[var(--button-bg)] hover:bg-[var(--hover-button-bg)] m-1 w-[50px] h-[50px] text-[var(--button-text)] rounded-[4px] cursor-pointer
                ${
                  currentPage === page
                    ? "bg-[var(--hover-button-bg)] border-1 border-[var(--primary1)]"
                    : ""
                }`}
            onClick={() => setCurrentPage(page)}
          >
            {page}
          </button>
        ))}
      </div>
    </>
  );
}

export default Pagination;
