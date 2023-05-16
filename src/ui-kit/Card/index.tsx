import React, { FC, MouseEventHandler } from 'react';
import classNames from 'classnames';
import { Heading } from 'ui-kit';
import { HeartEmptyIcon, HeartIcon } from 'ui-kit/icons';
import './index.scss';

interface CardProps {
  className?: string;
  id: string;
  backgroundImage: string;
  title: string;
  description: string;
  isLiked?: boolean;
  onLikeClick: (id: string) => void;
  onDislikeClick: (id: string) => void;
}

const Card: FC<CardProps> = ({
  className,
  id,
  backgroundImage,
  title,
  description,
  isLiked= false,
  onLikeClick,
  onDislikeClick,
}) => {
  return (
    <div className={classNames('card', className)}>
      <div
        className="card__image"
        style={{backgroundImage: `url(${backgroundImage})`}}
      />
      <div className={classNames('card__meta', 'card-meta')}>
        <Heading variant="h4" className="card-meta__heading">{title}</Heading>
        <p className="card-meta__description">{description}</p>
        <div className={classNames('card__like-icon', 'like-icon')}>
          {isLiked
            ? <HeartIcon onClick={() => onDislikeClick(id)}/>
            : <HeartEmptyIcon onClick={() => onLikeClick(id)}/>
          }
        </div>
      </div>
    </div>
  )
}

export default Card;
