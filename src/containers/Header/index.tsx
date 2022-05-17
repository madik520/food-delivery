import Container from '@mui/material/Container';
import Typography from "@mui/material/Typography";
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import ListItemText from '@mui/material/ListItemText';
import Link from '../../utils/mui/Link';
import Image from 'next/image';
import CustomLink from '../../components/CustomLink';

import { useEffect, useState } from 'react';
import classNames from 'classnames';

import LocalIcon from '../../assets/img/location.svg';
import SearchIcon from '../../assets/img/search.svg';
import PhoneIcon from '../../assets/img/phone.svg';
import Close from '../../assets/img/close.svg';

import styles from './header.module.scss';

type LinksTypes = {
  id: string;
  link: string;
  text: string
}

const LINKS: LinksTypes[] = [
  {
    id: "about",
    link: "/about",
    text: "About the restaurant"
  },
  {
    id: "delivery-conditions",
    link: "/delivery-conditions",
    text: "Delivery conditions"
  },
  {
    id: "return-products",
    link: "/return-products",
    text: "Return of goods"
  },
  {
    id: "promotions",
    link: "/promotions",
    text: "Promotions"
  },
];


const Header = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [top, setTop] = useState<number>(0);

  const handleOpenMenu = () => setIsOpen(true);
  const handleCloseMenu = () => setIsOpen(false);

  const isShowInput = classNames(styles.inputForm, {
    [styles.hide]: top > 10
  })

  useEffect(() => {
    const handleScroll = () => {
      setTop(window.scrollY);
    };
    handleScroll();

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [setTop])

  return(
    <header className={styles.header}>
      <Container className={styles.headerContainer} maxWidth={"xl"}>
          <Typography className={styles.logo} variant="h3">
            LOGOS
          </Typography>
          <Paper className={styles.inputForm} component={'form'}>
              <Image src={LocalIcon} alt="icon" />
              <InputBase
                className={styles.inputSearch}
                placeholder={'Enter shipping address'}
                inputProps={{ 'aria-label': 'enter shipping address' }}
              />
              <Image src={SearchIcon} alt="icon" />
          </Paper>
          <div className={styles.contact}>
            <ListItemAvatar>
              <Avatar className={styles.avatar}>
                <Image src={PhoneIcon} alt='icon' />
              </Avatar>
            </ListItemAvatar>
            <ListItemText className={styles.textItem} primary={"Contact: "} secondary={"+3 (333) 333-33-33"} />
          </div>
          <CustomLink link={"/cart"} text={'Cart'} isShopCart={true} />
      </Container>
      <Container className={styles.containerMobile}>
        <div id={"divers"} className={styles.mobileMenu}>
          <div onClick={handleOpenMenu} className={styles.hamburger}>
            <span></span>
            <span></span>
            <span></span>
            <p>menu</p>
          </div>
          <Typography className={styles.logo} variant="h3">
            LOGOS
          </Typography>
          <CustomLink link={"/cart"} text={'cart'} isShopCart={true} />
        </div>
        <Paper className={isShowInput} component={'form'}>
              <Image src={LocalIcon} alt="icon" />
              <InputBase
                className={styles.inputSearch}
                placeholder={'Enter shipping address'}
                inputProps={{ 'aria-label': 'enter shipping address' }}
              />
              <Image src={SearchIcon} alt="icon" />
          </Paper>
      </Container>
      { isOpen && 
        <div className={styles.mobileNavbar}>
          <div className={styles.mobileNavHeader}>
            <Typography className={styles.logo} variant="h3">
              LOGOS
            </Typography>
            <div className={styles.closeMenu} onClick={handleCloseMenu}>
              <Image src={Close} alt="icon" />
            </div>
          </div>
          <ul className={styles.mobileNavLinks}>
            {LINKS.map(({ id, link, text }) => {
              return <li key={id}>
                <Link onClick={handleCloseMenu} href={`${link}`}>{text}</Link>
              </li>
            })}
          </ul>
          
        </div>
      }
    </header>
  );
};

export default Header;