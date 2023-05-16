import { useState } from 'react';
import DATA from 'data/cards.json';
import { filter } from 'lodash';
import { CardProps } from 'types/common';

const useSearch = () => {
  const [searchValue, setSearchValue] = useState('');

  const filteredData = filter(DATA.cards, (card: CardProps) => {
    return card.title.toLowerCase().includes(searchValue.toLowerCase())
      || card.description.toLowerCase().includes(searchValue.toLowerCase());
  })

  return {
    setSearchValue,
    filteredData,
  };
}

export default useSearch;
