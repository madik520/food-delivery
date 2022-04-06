import Container from '@mui/material/Container';
import Typography from "@mui/material/Typography";
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import ListItemText from '@mui/material/ListItemText';
import Image from 'next/image';
import CustomLink from '../../components/CustomLink';

import LocalIcon from '../../assets/img/location.svg';
import SearchIcon from '../../assets/img/search.svg';
import PhoneIcon from '../../assets/img/phone.svg';
import styles from './header.module.scss';


const Header = () => {
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
            <ListItemText className={styles.textItem} primary={"Contact: "} secondary={"+7 (917) 510-57-59"} />
          </div>
          <CustomLink link={"/cart"} text={'Cart'} isShopCart={true} />
      </Container>
    </header>
  );
};

export default Header;