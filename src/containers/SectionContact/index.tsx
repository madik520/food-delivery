import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemText from '@mui/material/ListItemText';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Image from 'next/image';

import Location from '../../assets/img/geolocal.svg';
import Mail from '../../assets/img/mail.svg';
import Facebook from '../../assets/img/facebook.svg';
import Vk from '../../assets/img/vk.svg';
import Youtube from '../../assets/img/youtube.svg';
import Insta from '../../assets/img/insta.svg';
import styles from './SectionContact.module.scss';

const SectionContact = () => {
  return(
    <section className={styles.sectionContact}>
      <div className={styles.sectionWrapper}>
        <div className={styles.conctactFormBlock}>
          <div className={styles.contactForm}>
            <div className={styles.formHeader}>
              <Typography variant='h2'>contact</Typography>
            </div>
            <div className={styles.formInfo}>
              <div className={styles.infoBlock}>
                <ListItemAvatar className={styles.infoIcon}>
                  <Image src={Location} alt='icon' />
                </ListItemAvatar>
                <ListItemText className={styles.infoText} primary={"Our address:"} secondary={"MO, city district Krasnogorsk, village Ilyinkoe, Experimental street, 10"} />
              </div>
              <div className={styles.infoBlock}>
                <ListItemAvatar className={styles.infoIcon}>
                  <Image src={Mail} alt='icon' />
                </ListItemAvatar>
                <ListItemText className={styles.infoText} primary={"Our mail:"} secondary={"auto.wash@gmail.com"} />
              </div>
            </div>
            <div className={styles.bookBlock}>
              <Button variant="contained" disableElevation>BOOK A TABLE</Button>
              <div className={styles.bookText}>
                <p>+3 (773) 777-77-33</p>
                <span>Call or leave a request</span>
              </div>
            </div>
            <div className={styles.formFooter}>
              <Typography variant='body2'>We are in social networks:</Typography>
              <div className={styles.footerIcons}>
                <Image src={Facebook} alt='icon' />
                <Image src={Vk} alt='icon' />
                <Image src={Youtube} alt='icon' />
                <Image src={Insta} alt='icon' />
              </div>
            </div>
          </div>
        </div>
        <div className={styles.conctactFormBlock}>
          
        </div>
      </div>
    </section>
  );
};

export default SectionContact;