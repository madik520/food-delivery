import Grid from '@mui/material/Grid';
import ShoppingItem from './ShoppingItem';

import type { IShoppingList } from './ShoppingList';

const ShoppingList = ({ shoppingData = [], addToOrderData = [] }:IShoppingList) => {
  return (
    <div>
      <Grid maxWidth={'xl'} container direction={'column'}>
        { shoppingData.map((item) => {
          return <ShoppingItem 
            key={item.id}
            id={item.id}
            img={item.img}
            title={item.title}
            ingridients={item.ingridients}
            price={item.price}
            count={item.count}
          />
        }) }
      </Grid>
    </div>
  );
};

export default ShoppingList;