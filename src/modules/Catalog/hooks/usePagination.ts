import { useEffect, useState } from 'react';
import DATA from 'data/cards.json';
import { CardProps } from 'types/common';

const usePagination = (filteredData: CardProps[]) => {
  const [isAnimated, setIsAnimated] = useState(false);
  const [currentPage, setCurrentPage] = useState(0);
  const data = filteredData.length > 0 ? filteredData : DATA.cards;
  const cardsTotal = data.length || 0;
  const itemsPerPage = 6;

  useEffect(() => {
    let timer = setTimeout(() => setIsAnimated(true), 200);

    return () => {
      clearTimeout(timer);
    };
  },[isAnimated]);

  const handlePageChange = (pageNumber: number) => {
    setIsAnimated(false);
    setCurrentPage(pageNumber);
  };

  const dataPerPage = (data || []).reduce((resultArray: any, item, index: number) => {
    const chunkIndex = Math.floor(index / itemsPerPage);

    if(!resultArray[chunkIndex]) {
      resultArray[chunkIndex] = [];
    }

    resultArray[chunkIndex].push(item);

    return resultArray;
  }, [] as CardProps[]);

  return {
    isAnimated,
    dataPerPage,
    cardsTotal,
    itemsPerPage,
    currentPage,
    handlePageChange,
  };
}

export default usePagination;
