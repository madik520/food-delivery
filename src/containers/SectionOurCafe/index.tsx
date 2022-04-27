import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Image from 'next/image';

import IconItem1 from '../../assets/img/icon-item1.svg';
import IconItem2 from '../../assets/img/icon-item2.svg';
import IconItem3 from '../../assets/img/icon-item3.svg';

import styles from './SectionOurCafe.module.scss';

const SectionOurCafe = () => {
  return(
    <section className={styles.sectionOurCafe}>
      <div className={styles.ourCafeWrapper}>
        <div className={styles.ourCafeContent}>
          <div className={styles.aboutCafe}>
            <Typography variant='h2'>
              our cafe
            </Typography>
            <Typography variant='body1'>
              We are located in one of the most picturesque places
              in the city - on the banks of the river, this is your oasis within the city, 
              where you can escape from the noisy and dusty metropolis. 
              We really, really thought out everything to the 
              smallest detail: a project built from a wild Transcarpathian log house, 
              a fireplace in the main hall of the restaurant and panoramic windows overlooking 
              the river, cozy conversations on the river bank and the best 
              view terrace, a tent with a seating for 200 people, 
              a fabulous children's house and swimming pool.
            </Typography>
            <Button>view menu</Button>
          </div>
          <div className={styles.cafeIconBlock}>
            <div className={styles.cafeIconItem}>
              <Image src={IconItem1} alt={"icon"} />
              <span>Freshest Products</span>
            </div>
            <div className={styles.cafeIconItem}>
              <Image src={IconItem2} alt={"icon"} />
              <span>Fast shipping</span>
            </div>
            <div className={styles.cafeIconItem}>
              <Image src={IconItem3} alt={"icon"} />
              <span>The best chefs</span>
            </div>
            <div className={styles.cafeIconItem}>
              <Image src={IconItem1} alt={"icon"} />
              <span>Freshest Products</span>
            </div>
          </div>  
        </div>
      </div>
    </section>
  );
};

export default SectionOurCafe;