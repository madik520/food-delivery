import SectionMain from '../src/containers/HomeSections/SectionMain';
import SectionCarousel from '../src/containers/HomeSections/SectionCarousel';
import SectionOurCafe from '../src/containers/HomeSections/SectionOurCafe';
import SectionContact from '../src/containers/HomeSections/SectionContact';
import CustomLink from '../src/components/CustomLink';

import Container from '@mui/material/Container';
import { Tab, Tabs, Box } from '@mui/material';

import { useState, useEffect } from 'react';
import classNames from 'classnames';
import type { NextPage } from 'next';

import styles from '../src/assets/scss/home.module.scss';
import { tabsData } from '../src/utils/datas/tabsData/tabsData';
import { coldSnacks, hotSnacks, meatDishes } from '../src/utils/datas/cardData/cardData';


const Home: NextPage = () => {
  const [value, setValue] = useState<number>(0);
  const [top, setTop] = useState<number>(0);
  const [isTop, setIsTop] = useState<boolean>(false);
  const [getId, setId] = useState<string | undefined>(undefined);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  const handleClickGetId = (id: string | undefined) => setId(id);

  const tabsClass = classNames(styles.tabser, {
    [styles.scrollTabs]: top > 10
  })

  useEffect(() => {
    const scrollToSection = () => {
      if(getId !== undefined){
        const section = document.getElementById(getId);

        section?.scrollIntoView({
          block: "center", 
          behavior: "smooth"
        })
      }
    }

    const handleScroll = () => {
      setTop(window.scrollY);
    };

    const handleOffsetTop = () => {
      const elem = document.getElementById("tabsCart")?.getBoundingClientRect();
      if(elem?.top === 0){
        setIsTop(true);
      }else{
        setIsTop(false);
      }
    }

    handleScroll();
    handleOffsetTop();
    scrollToSection();

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("scroll", handleOffsetTop);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("scroll", handleOffsetTop);
    };
  }, [setTop, getId]);

  return (
    <>
      <SectionMain />
        <div id={"tabsCart"} className={tabsClass}>
          <Box className={styles.tabsBox}>
          <Container className={styles.tabsContainer} maxWidth={'xl'}>
            <Tabs
              value={value}
              onChange={handleChange}
              className={styles.tabsWrapper}  
              textColor={'inherit'}
              indicatorColor={'secondary'}
              variant={"scrollable"}
              scrollButtons={false}
            >
              {tabsData.map(({id, label, sectionId }) => {
                return <Tab onClick={() => handleClickGetId(sectionId)} key={id} className={styles.tabs} label={label} />
              })}
            </Tabs>
            {isTop && <div className={styles.shoppingCartSticky}>
              <CustomLink link={"/cart"} text={'Cart'} isShopCart={true} />
            </div>}
          </Container>
          </Box>
        </div>
      <SectionCarousel id={"coldSnacks"} title={"cold snacks"} cardData={coldSnacks} borderBottom={true} />
      <SectionCarousel id={"hotSnacks"} title={"hot snacks"} cardData={hotSnacks} borderBottom={true} />
      <SectionCarousel id={"meatDishes"} title={"meat dishes"} cardData={meatDishes} />
      <SectionOurCafe />
      <SectionContact />
    </>
  );
};

export default Home;
