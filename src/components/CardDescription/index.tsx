import { Table, TableHead, TableBody, TableCell, TableRow } from '@mui/material';
import Image from 'next/image';
import CustomLink from '../CustomLink';

import { useAppSelector } from "../../utils/hooks/AppHooks";
import { RootState } from "../../store/store";

import ShopIcon from '../../assets/img/shop-bag.svg';
import styles from "./CardDescription.module.scss";

const CardDescription = () => {
  const descriptionData = useAppSelector((state: RootState) => state.shoppingCart.itemDescription);

  if(descriptionData.hasOwnProperty("id")){
    const { id, bigImg, title, weight, mainText, price, dishes, count, description, ingridients  } = descriptionData


    return (
      <div className={styles.descBlock}>
        <div className={styles.descImgBlock}>
          <Image src={bigImg} alt={"pictures"} placeholder={"blur"} />
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
                <CustomLink isShopCart={true} text={"Cart"} icon={ShopIcon} link={"/cart"} />
                <span className={styles.price}>{price} $</span>
              </div>
            </div>
          </div>
          <Table>
            <TableHead>
              <TableRow>
                {description?.map(({ id, col }) => {
                  return <TableCell align='left' className={styles.tableHeader} key={id}>
                    <div>
                      {col}
                    </div>
                  </TableCell>
                })}
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow>
                {description?.map(({ val, col }) => {
                  return <TableCell className={styles.tableFooter} key={col}>{val}</TableCell>
                })}
              </TableRow>
            </TableBody>
          </Table>
        </div>
      </div>
    );
  }else{
    return <h1>No data :(</h1>
  }
};

export default CardDescription;