import Divider from '@mui/material/Divider';
import Button from '@mui/material/Button';
import Image from 'next/image';
import Link from '../../utils/mui/Link';

import { useAppSelector } from "../../utils/hooks/AppHooks";
import { RootState } from "../../store/store";

import ShopIcon from '../../assets/img/shop-bag.svg';
import styles from "./CardDescription.module.scss";

const CardDescription = () => {
  const descriptionData = useAppSelector((state: RootState) => state.shoppingCart.itemDescription);
  const { bigImg, title, weight, price, description, ingridients  } = descriptionData

  return (
      <div className={styles.descBlock}>
        <div className={styles.descImgBlock}>
          <div className={styles.deskImg}>
            <Image src={bigImg} alt={"pictures"} placeholder={"blur"} layout={'responsive'} />
          </div>
        </div>
        <div className={styles.descTextBlock}>
          <div className={styles.mainInfo}>
            <article>
              <h3>{title}</h3>
              <p>{ingridients}</p>
            </article>
            <div className={styles.weightInfo}>
              <p>Weight: {weight}g</p>
              <div className={styles.priceWithBtn}>
                <Link className={styles.inShopBtn} href={"/cart"}>
                  <Button variant='contained'>
                    <div>cart</div>
                    <Image src={ShopIcon} alt={'icon'} />
                  </Button>
                </Link>
                <span className={styles.price}>{price} $</span>
              </div>
            </div>
          </div>
          <div className={styles.tableBlock}>
            <div className={styles.tableCol}>
              { description?.map((i) => {
                return <div key={i.id}>
                  {i.col}
                </div>
              }) }
            </div>
            <Divider sx={{borderColor: 'rgba(255, 255, 255, 0.1)'}} />
            <div className={styles.tableRow}>
              { description?.map((item, index) => {
                return <div key={`${item.id}${index}`}>
                  {item.val}
                </div>
              }) }
            </div>
          </div>
        </div>
      </div>
  );
};

export default CardDescription;