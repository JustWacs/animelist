const Pagination = ({ page, lastPage, setPage }) => {
  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleNextPage = () => {
    setPage((prevState) => prevState + 1);
    scrollTop();
  };
  const handlePrevPage = () => {
    setPage((prevState) => prevState - 1);
    scrollTop();
  };

  return (
    <div className="flex items-center justify-center py-4 px-2 gap-4 text-xl">
      {page == 1 ? null : (
        <button onClick={handlePrevPage} className="text-white hover:text-sky-500">
          Prev
        </button>
      )}
      <p className="text-white">
        {page} of {lastPage}
      </p>
      {page >= lastPage ? null : (
        <button onClick={handleNextPage} className="text-white hover:text-sky-500">
          Next
        </button>
      )}
    </div>
  );
};
export default Pagination;
