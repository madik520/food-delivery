import CardItem from '../../../components/CardItem';
import Title from '../../../components/Title';
import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode } from 'swiper';
import classNames from 'classnames';

import { ISectionCarousel } from './SectionCarousel';

import styles from './SectionCarousel.module.scss';
import 'swiper/css';


const SectionCarousel = ({ cardData, title, borderBottom = false }:ISectionCarousel) => {
  const borderClass = classNames(styles.sectionCarousel, {
    [styles.active]: borderBottom
  })
  return(
    <section className={borderClass}>
      <Title title={title} />
      <Swiper
        slidesPerView={1}
        spaceBetween={10}
        freeMode={true}
        className="mySwiper"
        modules={[FreeMode]}
        breakpoints={{
          640: {
            slidesPerView: 2,
          },
          900: {
            slidesPerView: 3,
          },
          1200: {
            slidesPerView: 4,
          },
          1600: {
            slidesPerView: 5,
          }
        }}
      >
      {cardData.map((item) => {
          return <SwiperSlide key={item.id}>
            <CardItem
            id={item.id}
            img={item.img}
            title={item.title}
            mainText={item.mainText}
            spanText={item.spanText}
            price={item.price}
          />
          </SwiperSlide>
        })}
      </Swiper>
    </section>
  );
};

export default SectionCarousel;