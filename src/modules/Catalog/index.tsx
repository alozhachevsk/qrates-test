import React, { FC } from 'react';
import classNames from 'classnames';
import { Card, Input, Pagination } from 'ui-kit';
import { CardProps } from 'types/common';
import { useAppDispatch, useAppSelector } from 'init/hooks';
import { useSearch, usePagination } from './hooks';
import { addLikedItem, removeLikedItem } from './reducers/catalog';
import './index.scss';

export const Catalog: FC = () => {
  const {likedItems} = useAppSelector((state) => state.catalog);
  const dispatch = useAppDispatch();
  const {setSearchValue, filteredData} = useSearch();
  const {
    isAnimated,
    dataPerPage,
    cardsTotal,
    itemsPerPage,
    currentPage,
    handlePageChange,
  } = usePagination(filteredData);

  return (
    <section className="catalog">
      <div className={classNames('catalog__top-bar', 'top-bar')}>
        <Pagination
          currentPage={currentPage}
          totalItems={cardsTotal}
          itemsPerPage={itemsPerPage}
          handlePageChange={handlePageChange}
        />
        <Input
          className="top-bar__input"
          name="search"
          placeholder="Search..."
          onChange={(value: string) => setSearchValue(value)}
        />
      </div>

      <div className="grid">
        {dataPerPage[currentPage].map(({id, title, description, image_url}: CardProps) => (
          <Card
            className={classNames('grid__item', isAnimated && 'isAnimated')}
            key={id}
            id={id}
            title={title}
            description={description}
            backgroundImage={image_url}
            isLiked={likedItems.includes(id)}
            onLikeClick={(id: string) => dispatch(addLikedItem(id))}
            onDislikeClick={(id: string) => dispatch(removeLikedItem(id))}
          />
        ))}
      </div>
    </section>
  )
}
