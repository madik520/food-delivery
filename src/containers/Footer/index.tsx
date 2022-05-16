import Typography from '@mui/material/Typography';
import Link  from '../../utils/mui/Link';

import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import styles from './Footer.module.scss';

const Footer = () => {
  const goingToStart = () => window.scrollTo({ top: 0, behavior: "smooth" });
  return (
    <footer className={styles.footer}>
      <div className={styles.footerWrapper}>
        <div onClick={goingToStart} className={styles.goingUpBtn}>
          <ArrowBackIosNewIcon />
        </div>
        <div className={styles.politics}>
          <Typography variant="h3">
            LOGOS
          </Typography>
          <Typography variant='body2'>
            © LLC IC "APSHERON"<br />
            All rights reserved. 2010-{(new Date().getFullYear())}
          </Typography>
          <ul >
            <li>Terms of use</li>
            <li>Site`s map</li>
            <li>Privacy policy</li>
          </ul>
        </div>
        <div className={styles.footerNavigation}>
          <ul className={styles.navLists}>
            <li><Link href={"/about"}>About the restaurant </Link></li>
            <li><Link href={"/delivery-conditions"}>Delivery conditions</Link></li>
            <li><Link href={"/return-products"}>Return of goods</Link></li>
            <li><Link href={"/promotions"}>Promotions</Link></li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;