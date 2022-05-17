import SectionMain from '../src/containers/HomeSections/SectionMain';
import SectionCarousel from '../src/containers/HomeSections/SectionCarousel';
import SectionOurCafe from '../src/containers/HomeSections/SectionOurCafe';
import SectionContact from '../src/containers/HomeSections/SectionContact';
import CustomTabs from '../src/components/Tabs';

import { useState, useEffect } from 'react';
import type { NextPage } from 'next';

import styles from '../src/assets/scss/home.module.scss';
import { coldSnacks, hotSnacks, meatDishes } from '../src/utils/datas/cardData/cardData';


const Home: NextPage = () => {
  const [top, setTop] = useState<number>(0);
  const [isTop, setIsTop] = useState<boolean>(false);
  const [getId, setId] = useState<string | undefined>(undefined);

  const handleClickGetId = (id: string | undefined) => setId(id);

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

    window.addEventListener("scroll", () => {
      handleScroll();
      handleOffsetTop();
    });
    return () => {
      window.removeEventListener("scroll", () => {
        handleScroll();
        handleOffsetTop();
      });
    };
  }, [setTop, getId]);
  return (
    <>
      <SectionMain />
      <CustomTabs top={top} isTop={isTop} handleClickGetId={handleClickGetId} />
      <SectionCarousel id={"coldSnacks"} title={"cold snacks"} cardData={coldSnacks} borderBottom={true} />
      <SectionCarousel id={"hotSnacks"} title={"hot snacks"} cardData={hotSnacks} borderBottom={true} />
      <SectionCarousel id={"meatDishes"} title={"meat dishes"} cardData={meatDishes} />
      <SectionOurCafe />
      <SectionContact />
    </>
  );
};

export default Home;
