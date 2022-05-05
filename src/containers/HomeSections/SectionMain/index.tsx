import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Image from 'next/image';

import Menu from '../../assets/img/menu2.jpg';
import styles from './SectionMain.module.scss';

const SectionMain = () => {
  return(
    <section className={styles.sectionMain}>
      <div className={styles.sectionWrapper}>
        <div className={styles.infoBlock}>
          <Typography variant={'h1'}>
            Delicious food delivery in 60 minutes
          </Typography>
          <Button variant={"contained"}>Haven't tried yet?</Button>
        </div>
      </div>
    </section>
  );
};

export default SectionMain;