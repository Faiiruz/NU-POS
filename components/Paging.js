import React from "react";

const Paging = ({ currentPage, totalPages, onPageChange }) => {
  const isFirstPage = currentPage === 1;
  const isLastPage = currentPage === totalPages;

  const handlePageChange = (pageNumber) => {
    onPageChange(pageNumber);
  };

  return (
    <div className="flex justify-center mt-5">
      <button
        onClick={() => handlePageChange(currentPage - 1)}
        disabled={isFirstPage}
        className="px-3 py-1 bg-gray-200 text-gray-500 disabled:opacity-50"
      >
        Previous
      </button>
      <span className="px-3 py-1 bg-gray-200 text-gray-500">
        {currentPage} / {totalPages}
      </span>
      <button
        onClick={() => handlePageChange(currentPage + 1)}
        disabled={isLastPage}
        className="px-3 py-1 bg-gray-200 text-gray-500 disabled:opacity-50"
      >
        Next
      </button>
    </div>
  );
};

export default Paging;