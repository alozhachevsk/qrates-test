import React, { FC } from 'react';
import classNames from 'classnames';
import './index.scss';

interface PaginationProps {
  className?: string;
  totalItems?: number;
  itemsPerPage?: number;
  currentPage?: number;
  handlePageChange: (pageNumber: number) => void;
}

const Pagination: FC<PaginationProps> = ({
  className,
  currentPage,
  totalItems = 0,
  handlePageChange,
  itemsPerPage = 0,
}) => {
  let maxPages = Math.ceil(totalItems/itemsPerPage);

  return (
    <div className="pagination">
      {[...Array(maxPages)].map((pageNumber: number, index) => (
        <span
          className={
            classNames(className, 'pagination__item', currentPage === index && 'pagination__item--active')
          }
          key={index}
          onClick={() => handlePageChange(index)}
        >
          {index + 1}
        </span>
      ))}
    </div>
  )
}

export default Pagination;
