import CardItem from '../../components/CardItem';
import Img1 from '../../assets/img/item1.jpg';
import styles from './SectionCarousel.module.scss';

const SectionCarousel = () => {
  return(
    <section className={styles.sectionCarousel}>
      <CardItem
        id={1}
        img={Img1} 
        title={"Гусь"} 
        spanText={"Weght: 300g"} 
        mainText={"Фаршированный яблоками"} 
        price={600} 
      />
    </section>
  );
};

export default SectionCarousel;