import CardItem from '../../components/CardItem';
import Carousel from "react-multi-carousel";
import type { CarouselProps } from 'react-multi-carousel';

import Img1 from '../../assets/img/item1.jpg';
import styles from './SectionCarousel.module.scss';
import "react-multi-carousel/lib/styles.css";

const MOCDATA = [
  {
    id: 1,
    img: Img1,
    title: "Гусь",
    spanText: "Weght: 300g",
    mainText: "Фаршированный яблоками",
    price: 600
  },
  {
    id: 2,
    img: Img1,
    title: "Индейка",
    spanText: "Weght: 225g",
    mainText: "Фаршированный гречневой кашей, курагой, апельсином и зеленым яблоком",
    price: 1600
  },
  {
    id: 3,
    img: Img1,
    title: "Гусь",
    spanText: "Weght: 300g",
    mainText: "Фаршированный яблоками",
    price: 600
  },
  {
    id: 4,
    img: Img1,
    title: "Гусь",
    spanText: "Weght: 300g",
    mainText: "Фаршированный яблоками",
    price: 600
  },
  {
    id: 5,
    img: Img1,
    title: "Гусь",
    spanText: "Weght: 300g",
    mainText: "Фаршированный яблоками",
    price: 600
  },
  {
    id: 6,
    img: Img1,
    title: "Индейка",
    spanText: "Weght: 225g",
    mainText: "Фаршированный гречневой кашей, курагой, апельсином и зеленым яблоком",
    price: 1600
  },
  {
    id: 7,
    img: Img1,
    title: "Гусь",
    spanText: "Weght: 300g",
    mainText: "Фаршированный яблоками",
    price: 600
  },
  {
    id: 8,
    img: Img1,
    title: "Индейка",
    spanText: "Weght: 225g",
    mainText: "Фаршированный гречневой кашей, курагой, апельсином и зеленым яблоком",
    price: 1600
  },
];

const SectionCarousel = ({ deviceType }:any) => {
  const responsive = {
    desktop: {
      breakpoint: {
        max: 3000,
        min: 1024
      },
      items: 4,
      slidesToSlide: 2,
      partialVisibilityGutter: 40
    },
    tablet: {
      breakpoint: {
        max: 1024,
        min: 200
      },
      items: 2,
      slidesToSlide: 2,
      partialVisibilityGutter: 30
    },
    mobile: {
      breakpoint: {
        max: 464,
        min: 0
      },
      items: 1,
      slidesToSlide: 1,
      partialVisibilityGutter: 30
    }
  };
  console.log(deviceType)
  return(
    <section className={styles.sectionCarousel}>
      <Carousel
          responsive={responsive}
          ssr={true} // means to render carousel on server-side.
          containerClass="carousel-container"
          removeArrowOnDeviceType={["tablet", "mobile"]}
          deviceType={deviceType}
          itemClass={styles.carouselItem}
          shouldResetAutoplay={false}
          centerMode={deviceType !== "mobile" ? true : false}
        >
        {MOCDATA.map((item) => {
          return <CardItem
            key={item.id}
            id={item.id}
            img={item.img}
            title={item.title}
            mainText={item.mainText}
            spanText={item.spanText}
            price={item.price}
          />
        })}
      </Carousel>
    </section>
  );
};

export default SectionCarousel;