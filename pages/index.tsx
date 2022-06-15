import SectionMain from '../src/containers/HomeSections/SectionMain';
import SectionCarousel from '../src/containers/HomeSections/SectionCarousel';
import SectionOurCafe from '../src/containers/HomeSections/SectionOurCafe';
import SectionContact from '../src/containers/HomeSections/SectionContact';
import CustomTabs from '../src/components/Tabs';

import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';

import { RootState } from '../src/store/store';
import type { NextPage } from 'next';

import styles from '../src/assets/scss/home.module.scss';

const Home: NextPage = () => {
  const [top, setTop] = useState<number>(0);
  const [isTop, setIsTop] = useState<boolean>(false);
  const [getId, setId] = useState<string | undefined>(undefined);
  const state = useSelector((state: RootState) => state.shoppingCart.cartData);

  const handleClickGetId = (id: string | undefined) => setId(id);

  useEffect(() => {

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
      <SectionCarousel id={"coldSnacks"} title={"cold snacks"} cardData={state.coldSnacks} borderBottom={true} />
      <SectionCarousel id={"hotSnacks"} title={"hot snacks"} cardData={state.hotSnacks} borderBottom={true} />
      <SectionCarousel id={"meatDishes"} title={"meat dishes"} cardData={state.meatDishes} />
      <SectionOurCafe />
      <SectionContact />
    </>
  );
};

export default Home;
