import SectionMain from '../src/containers/HomeSections/SectionMain';
import SectionCarousel from '../src/containers/HomeSections/SectionCarousel';
import SectionOurCafe from '../src/containers/HomeSections/SectionOurCafe';
import SectionContact from '../src/containers/HomeSections/SectionContact';
import Container from '@mui/material/Container';
import { Tab, Tabs, Box } from '@mui/material';

import { useState } from 'react';
import type { NextPage } from 'next';

import styles from '../src/assets/scss/home.module.scss';
import { tabsData } from '../src/utils/datas/tabsData/tabsData';
import { coldSnacks, hotSnacks, meatDishes } from '../src/utils/datas/cardData/cardData';

const Home: NextPage = () => {
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
      <SectionCarousel title={"cold snacks"} cardData={coldSnacks} borderBottom={true} />
      <SectionCarousel title={"hot snacks"} cardData={hotSnacks} borderBottom={true} />
      <SectionCarousel title={"meat dishes"} cardData={meatDishes} />
      <SectionOurCafe />
      <SectionContact />
    </>
  );
};

export default Home;
