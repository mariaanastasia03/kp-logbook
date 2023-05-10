import React from 'react';

const Pagination = ({ postPerPage, totalPost, paginate }) => {
  const pageNumber = [];
  for (let i = 1; i <= Math.ceil(totalPost / postPerPage); i++) {
    pageNumber.push(i);
  }

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
    </nav>
  );
};

export default Pagination;
