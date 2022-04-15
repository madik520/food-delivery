import SectionMain from '../src/containers/SectionMain';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';

import { Tab, Tabs, Box } from '@mui/material';
import SectionCarousel from '../src/containers/SectionCarousel';

import { useState } from 'react';
import type { NextPage } from 'next';

import styles from '../src/assets/scss/home.module.scss';
import { tabsData } from '../src/utils/datas/tabsData/tabsData';


const Home: NextPage = () => {
  const [value, setValue] = useState<number>(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <>
      <SectionMain />
      <Container className={styles.tabsContainer} maxWidth="xl">
        <Box className={styles.tabsBox}>
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
        </Box>
      </Container>
      <SectionCarousel />
    </>
  );
};

export default Home;
