import React from 'react';
//import ReactPaginate from 'react-paginate';

const Pagination = ({ postPerPage, totalPost, paginate }) => {
  const pageNumber = [];
  for (let i = 1; i <= Math.ceil(totalPost / postPerPage); i++) {
    pageNumber.push(i);
  }

  // const itemsPerPage = 5;

  // const { searchResult, getSearchTerm, inputEl, searchTerm } =
  //   useSearch(currentTask);
  // const listTasks = searchTerm < 1 ? currentTask : searchResult;

  // const handlePageClick = (event) => {
  //   const newOffset = (event.selected * itemsPerPage) % listTasks.length;
  //   console.log(
  //     `User requested page number ${event.selected}, which is offset ${newOffset}`
  //   );
  //   setItemOffset(newOffset);
  // };

  return (
    <nav className="items-center">
      <ul className="pagination flex items-center justify-center">
        {pageNumber.map((number) => (
          <li key={number} className="page-item active:bg-orange mx-3 p-3">
            <p
              onClick={() => paginate(number)}
              className="page-link cursor-pointer"
            >
              {number}
            </p>
          </li>
        ))}
      </ul>
      {/* <ReactPaginate
        className="flex flex-row items-center justify-center gap-2"
        containerClassName={'pagination'}
        disabledClassName={'disabled-page'}
        pageClassName={'item pagination-page'}
        previousClassName={'item previous'}
        nextClassName={'item next'}
        breakLabel="..."
        nextLabel=">"
        onPageChange={handlePageClick}
        pageRangeDisplayed={2}
        pageCount={pageCount}
        previousLabel="<"
        renderOnZeroPageCount={null}
      /> */}
    </nav>
  );
};

export default Pagination;
