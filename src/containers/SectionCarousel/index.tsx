import CardItem from '../../components/CardItem';
import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode } from 'swiper';

import Img1 from '../../assets/img/item1.jpg';
import Img2 from '../../assets/img/item2.jpg';
import Img3 from '../../assets/img/item3.jpg';
import Img4 from '../../assets/img/item4.jpg';
import styles from './SectionCarousel.module.scss';
import 'swiper/css';

const MOCDATA = [
  {
    id: 1,
    img: Img1,
    title: "Goose",
    spanText: "Weght: 300g",
    mainText: "Stuffed with apples",
    price: 750
  },
  {
    id: 2,
    img: Img2,
    title: "Duck",
    spanText: "Weght: 225g",
    mainText: "Stuffed with rice, dried apricots and quince",
    price: 50
  },
  {
    id: 3,
    img: Img3,
    title: "Lamb",
    spanText: "Weght: 300g",
    mainText: "Stuffed with buckwheat porridge,dried apricots, orange and green apple",
    price: 1200
  },
  {
    id: 4,
    img: Img4,
    title: "Turkey",
    spanText: "Weght: 300g",
    mainText: "Stuffed with buckwheat porridge, dried apricots, orange and green apple",
    price: 550
  },
  {
    id: 5,
    img: Img1,
    title: "Goose",
    spanText: "Weght: 300g",
    mainText: "Stuffed with apples",
    price: 750
  },
  {
    id: 6,
    img: Img4,
    title: "Turkey",
    spanText: "Weght: 300g",
    mainText: "Stuffed with buckwheat porridge, dried apricots, orange and green apple",
    price: 550
  },
  {
    id: 7,
    img: Img1,
    title: "Goose",
    spanText: "Weght: 300g",
    mainText: "Stuffed with apples",
    price: 750
  },
  {
    id: 8,
    img: Img3,
    title: "Lamb",
    spanText: "Weght: 300g",
    mainText: "Stuffed with buckwheat porridge,dried apricots, orange and green apple",
    price: 1200
  },
];

const SectionCarousel = () => {
  return(
    <section className={styles.sectionCarousel}>
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
          1024: {
            slidesPerView: 4,
          },
          1600: {
            slidesPerView: 5,
          }
        }}
      >
      {MOCDATA.map((item) => {
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