import Divider from "@mui/material/Divider";
import CardDescription from "../../src/components/CardDescription";
import ButtonBack from "../../src/components/ButtonBack";
import SectionCarousel from '../../src/containers/HomeSections/SectionCarousel';
import SectionContact from "../../src/containers/HomeSections/SectionContact";

import { useAppSelector } from "../../src/utils/hooks/AppHooks";
import { RootState } from "../../src/store/store";

import styles from './CardInfo.module.scss';

const DescriptionPage = () => {
  const cardData = useAppSelector((state: RootState) => state.shoppingCart.cartData)
  const descriptionData = useAppSelector((state: RootState) => state.shoppingCart.itemDescription);

  if(descriptionData.hasOwnProperty("id")) {
    return (
      <section className={styles.descriptionSection}>
        <div className={styles.descWrapper}>
          <ButtonBack />
          <CardDescription />
        </div>
        <Divider sx={{ 
          borderColor: 'none',
          borderImageSource: 'linear-gradient(270deg, rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, 0.2) 100%)',
          borderImageSlice: 2
          }} 
        />
        <SectionCarousel id={"coldSnacks"} title={"BUY WITH THIS PRODUCT"} cardData={cardData.coldSnacks} />
        <SectionContact />
      </section>
    );
  }else {
    return <h1>No data :(</h1>
  }
};

export default DescriptionPage;