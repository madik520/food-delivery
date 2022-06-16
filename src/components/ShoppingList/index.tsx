import Grid from '@mui/material/Grid';
import ShoppingItem from './ShoppingItem';

import type { IShoppingList } from './ShoppingList';

import styles from './ShoppingList.module.scss';

const ShoppingList = ({ shoppingData = [], addToOrderData = [] }: IShoppingList) => {
	return (
		<>
			<Grid className={styles.listContainer} maxWidth={'xl'} container direction={'column'}>
				{shoppingData.map((item) => {
					return (
						<ShoppingItem
							key={item.id}
							id={item.id}
							img={item.img}
							title={item.title}
							ingridients={item.ingridients}
							count={item.count}
							totalSumm={item.totalSumm}
							dishes={item.dishes}
							bigImg={item.bigImg}
							weight={item.weight}
							price={item.price}
							mainText={item.mainText}
							description={item.description}
						/>
					);
				})}
			</Grid>
		</>
	);
};

export default ShoppingList;
