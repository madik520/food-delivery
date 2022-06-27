import Button from '@mui/material/Button';
import Link from '../../utils/mui/Link';

import { useState, MouseEvent } from 'react';

import type { IShoppingCheckout } from './ShoppingCheckout';
import styles from './ShoppingCheckout.module.scss';

const ShoppingCheckout = ({ total = 0 }: IShoppingCheckout) => {
  const freeCount:number = 1500;
  const minOrder:number = 300;

  const disabledBtn = (e: MouseEvent<HTMLAnchorElement>) => {
    if(total < minOrder) {
      return e.preventDefault();
    }else {
      return null;
    }
  }

  const freeDelivery = total === 0 || total < freeCount;

  return (
    <div className={styles.checkoutBlock}>
      <div className={styles.total}>
        <p>
          Total: <span>{total} $</span>
        </p>
        <p>
          { freeDelivery ?
            <span>Before free delivery is not enough: <span>{freeCount - total}$</span></span> :
            <span>Delivery is <span>free</span></span>
          }
        </p>
        <p>
          Minimum order amount {minOrder}$
        </p>
      </div>
      <Link style={{ textDecoration: 'none' }} onClick={disabledBtn} href="/order">
        <Button disabled={total < minOrder ? true : false} variant='contained'>Checkout</Button>
      </Link>
    </div>
  );
};

export default ShoppingCheckout;