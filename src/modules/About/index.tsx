import React, { FC, useRef } from 'react';
import classNames from 'classnames';
import { Navigation, Swiper as SwiperType } from 'swiper';
import { SwiperSlide, Swiper } from 'swiper/react';
import { Heading } from 'ui-kit';
import DATA from 'data/cards.json';
import { CardProps } from 'types/common';
import './index.scss';

import 'swiper/css';
import 'swiper/css/pagination';

export const About: FC = () => {
  const swiperRef = useRef<SwiperType>();

  return (
    <section className="about">
      <div className="slider">
        <Swiper
          className="custom-swiper"
          slidesPerView="auto"
          modules={[Navigation]}
          breakpoints={{
            320: {
              centeredSlides: false,
              spaceBetween: 20,
            },
            769: {
              centeredSlides: true,
              spaceBetween: 30,
            },
          }}
          onBeforeInit={(swiper) => {
            swiperRef.current = swiper;
          }}
        >
          {DATA.cards.map((item: CardProps) => (
            <SwiperSlide key={item.id} className={classNames('')}>
              <img src={item.image_url} alt=""/>
            </SwiperSlide>
          ))}
        </Swiper>
        <div className={classNames('slider__pagination', 'slider-pagination')}>
          <button
            className="slider-pagination__btn"
            onClick={() => swiperRef.current?.slidePrev()}
          >
            {'<'}
          </button>
          <button
            className="slider-pagination__btn"
            onClick={() => swiperRef.current?.slideNext()}
          >
            {'>'}
          </button>
        </div>
      </div>

      <div className="about-content">
        <Heading variant="h1" className="about-content__h1">QRATES</Heading>
        <Heading>
          We're record and cassette lovers, music fans. We believe they serve an important connection between musicians
          and fans. So we built Qrates to help artists bring the magic of music on physical things to more people.
        </Heading>
      </div>
    </section>
  )
}
