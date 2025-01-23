import React from "react";

const Pagination = ({ totalRecords, recordsPerPage, currentPage, onPageChange }) => {
  const totalPages = Math.ceil(totalRecords / recordsPerPage);
  const visiblePages = 5;
  const startPage = Math.max(1, currentPage - Math.floor(visiblePages / 2));
  const endPage = Math.min(totalPages, startPage + visiblePages - 1);

  const handlePrev = () => {
    if (currentPage > 1) onPageChange(currentPage - 1);
  };

  const handleNext = () => {
    if (currentPage < totalPages) onPageChange(currentPage + 1);
  };

  return (
    <div className="pagination" aria-label="Pagination navigation">
    <button
      disabled={currentPage === 1}
      onClick={handlePrev}
      aria-label="Go to previous page"
    >
      Previous
    </button>
    {startPage > 1 && (
      <button onClick={() => onPageChange(1)} aria-label="Go to page 1">
        1
      </button>
    )}
    {startPage > 2 && <span aria-hidden="true">...</span>}
    {Array.from({ length: endPage - startPage + 1 }, (_, i) => {
      const page = startPage + i;
      return (
        <button
          key={page}
          className={currentPage === page ? "active" : ""}
          onClick={() => onPageChange(page)}
          aria-current={currentPage === page ? "page" : undefined}
          aria-label={`Go to page ${page}`}
        >
          {page}
        </button>
      );
    })}
    {endPage < totalPages - 1 && <span aria-hidden="true">...</span>}
    {endPage < totalPages && (
      <button
        onClick={() => onPageChange(totalPages)}
        aria-label={`Go to page ${totalPages}`}
      >
        {totalPages}
      </button>
    )}
    <button
      disabled={currentPage === totalPages}
      onClick={handleNext}
      aria-label="Go to next page"
    >
      Next
    </button>
  </div>
  
  );
};

export default Pagination;
