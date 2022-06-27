import Typography from '@mui/material/Typography';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import Link from '../../src/utils/mui/Link';
import Title from '../../src/components/Title';
import ShoppingList from '../../src/components/ShoppingList';
import ShoppingCheckout from '../../src/components/ShoppingCheckout';


import { useAppSelector } from '../../src/utils/hooks/AppHooks';
import { RootState } from '../../src/store/store';

import styles from './cart.module.scss';

const Cart = () => {
  const cartData = useAppSelector((state: RootState) => state.shoppingCart.shoppingCart);

  const totalSumm = cartData.reduce((acc, i) => acc + i.totalSumm, 0);

  if(cartData.length > 0){
    return (
      <section className={styles.shoppingCartPage}>
        <div className={styles.sectionWrapper}>
          <div className={styles.cartTitle}>
            <Link href={'/'}>
              <ArrowBackIosIcon />
              <Typography variant='body1' component={'span'}>back to home</Typography>
            </Link>
            <Title title='cart' itemInCart={cartData.length}/>
          </div>
          <ShoppingList shoppingData={cartData} addToOrderData={[]} />
          <ShoppingCheckout total={totalSumm} />
        </div>
      </section>
    )
  }else {
    return <h1>Go fuck your self</h1>
  }
}

export default Cart;