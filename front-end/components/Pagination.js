import React from "react";
import paginationStyles from "../styles/Pagination.module.css";

const Pagination = ({
  tasksPerPage,
  totalTasks,
  currentPage,
  setCurrentPage,
}) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalTasks / tasksPerPage); i++) {
    pageNumbers.push(i);
  }

  const selectedPageLink = (number) => (
    <li key={number}>
      <a
        href="#"
        onClick={() => setCurrentPage(number)}
        className={paginationStyles.selectedPageLink}
      >
        {number}
      </a>
    </li>
  );

  const pageLink = (number) => (
    <li key={number}>
      <a
        href="#"
        onClick={() => setCurrentPage(number)}
        className={paginationStyles.pageLink}
      >
        {number}
      </a>
    </li>
  );

  return (
    <nav>
      <ul className={paginationStyles.pagination}>
        {pageNumbers.map((number) => {
          console.log(number, currentPage);
          const res =
            number === currentPage
              ? selectedPageLink(number)
              : pageLink(number);
          return res;
        })}
      </ul>
    </nav>
  );
};

export default Pagination;
