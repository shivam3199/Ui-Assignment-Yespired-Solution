import React from "react";
import { useLocation } from "react-router-dom";
import "./pagination.scss";
import { MdKeyboardDoubleArrowLeft } from "react-icons/md";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";
import { IoIosArrowForward } from "react-icons/io";
import { IoIosArrowBack } from "react-icons/io";

const Pagination = ({ totalPages, currentPage, setCurrentPage }) => {
  const location = useLocation();

  const goFirstPage = () => {
    setCurrentPage(1);
    updateURL(1);
  };

  const goLastPage = () => {
    setCurrentPage(totalPages);
    updateURL(totalPages);
  };

  const handlePrevPage = () => {
    const prevPage = Math.max(currentPage - 1, 1);
    setCurrentPage(prevPage);
    updateURL(prevPage);
  };

  const handleNextPage = () => {
    const nextPage = Math.min(currentPage + 1, totalPages);
    setCurrentPage(nextPage);
    updateURL(nextPage);
  };

  const handlePageClick = (pageNum) => {
    setCurrentPage(pageNum);
    updateURL(pageNum);
  };

  const updateURL = (pageNum) => {
    const url = `/${pageNum}${location.search}`;
    window.history.replaceState(null, "", url);
  };

  const renderPageNumbers = () => {
    const pageNumbers = Array.from(
      { length: totalPages },
      (_, index) => index + 1
    );
    return pageNumbers.map((pageNum) => (
      <button
        key={pageNum}
        className={pageNum === currentPage ? "active" : ""}
        onClick={() => handlePageClick(pageNum)}
      >
        {pageNum}
      </button>
    ));
  };

  return (
    <div className="pagination">
      <button onClick={goFirstPage}>
        <MdKeyboardDoubleArrowLeft />
      </button>
      <button onClick={handlePrevPage} disabled={currentPage === 1}>
        <IoIosArrowBack />
      </button>
      {renderPageNumbers()}
      <button onClick={handleNextPage} disabled={currentPage === totalPages}>
        <IoIosArrowForward />
      </button>
      <button onClick={goLastPage}>
        <MdKeyboardDoubleArrowRight />
      </button>
    </div>
  );
};

export default Pagination;
