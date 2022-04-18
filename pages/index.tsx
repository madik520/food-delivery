import SectionMain from '../src/containers/SectionMain';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';

import { Tab, Tabs, Box } from '@mui/material';
import SectionCarousel from '../src/containers/SectionCarousel';

import { useState } from 'react';
import type { NextPage } from 'next';

import styles from '../src/assets/scss/home.module.scss';
import { tabsData } from '../src/utils/datas/tabsData/tabsData';
import MobileDetect from 'mobile-detect';


const Home: NextPage = ({ deviceType }:any) => {
  const [value, setValue] = useState<number>(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <>
      <SectionMain />
        <Box className={styles.tabsBox}>
          <Container className={styles.tabsContainer} maxWidth={'xl'}>
          <Tabs
            value={value}
            onChange={handleChange}
            className={styles.tabsWrapper}  
            textColor={'inherit'}
            indicatorColor={'secondary'}
          >
            {tabsData.map(({id, label}) => {
              return <Tab key={id} label={label} />
            })}
          </Tabs>
          </Container>
        </Box>
      <SectionCarousel deviceType={deviceType} />
    </>
  );
};

Home.getInitialProps = ({ req }:any) => {
  let userAgent;
    let deviceType;
    if (req) {
      userAgent = req.headers["user-agent"];
    } else {
      userAgent = navigator.userAgent;
    }
    const md = new MobileDetect(userAgent);
    if (md.tablet()) {
      deviceType = "tablet";
    } else if (md.mobile()) {
      deviceType = "mobile";
    } else {
      deviceType = "desktop";
    }
    return { deviceType };
}

export default Home;
