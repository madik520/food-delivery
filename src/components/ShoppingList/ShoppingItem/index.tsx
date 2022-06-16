import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import Image from 'next/image';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import CloseIcon from '../../../assets/img/close.svg';

import { useAppDispatch } from '../../../utils/hooks/AppHooks';
import { addItemInCart, deleteCountItem, removeItemFromCart } from '../../../actions/actionCartItem';

import type { ICardItem } from '../../CardItem/CardItem';

import styles from './ShoppingItem.module.scss';

const ShoppingItem = ({
	id,
	img,
	title,
	ingridients,
	count,
	totalSumm,
	dishes,
	bigImg,
	weight,
	price,
	mainText,
	description
}: ICardItem) => {
	const dispatch = useAppDispatch();

	const handleAddItemInCart = () =>
		dispatch(
			addItemInCart({
				id,
				img,
				bigImg,
				title,
				weight,
				mainText,
				price,
				dishes,
				description,
				ingridients,
				count: (count += 1),
				totalSumm: count === 0 ? price : price * count
			})
		);
	const handleDeleteItem = () => {
		dispatch(removeItemFromCart(id));
		dispatch(deleteCountItem({ id, count: 0, dishes }));
	};
	const handleDeleteCountAndItem = () => {
		if (count <= 1) {
			dispatch(deleteCountItem({ id, count: (count -= 1), dishes }));
			handleDeleteItem();
		} else {
			dispatch(deleteCountItem({ id, count: (count -= 1), dishes }));
		}
	};

	return (
		<Grid className={styles.listItem} item>
			<div className={styles.itemInfo}>
				<div className={styles.itemImage}>
					<Image src={img} alt={'image'} layout={'responsive'} placeholder={'blur'} />
				</div>
				<div className={styles.itemText}>
					<Typography variant={'h4'}>{title}</Typography>
					<Typography variant={'body1'}>{ingridients}</Typography>
					<div className={styles.itemCount}>
						<div className={styles.countCalculate}>
							<IconButton onClick={handleDeleteCountAndItem} size="small">
								<RemoveIcon />
							</IconButton>
							<Typography variant={'body1'} component={'span'}>
								{count}
							</Typography>
							<IconButton onClick={handleAddItemInCart} size="small">
								<AddIcon />
							</IconButton>
						</div>
						<div className={styles.countPrice}>
							<Typography variant={'h4'}>{totalSumm}$</Typography>
							<IconButton size="small">
								<Image src={CloseIcon} alt={'close-icon'} />
							</IconButton>
						</div>
					</div>
				</div>
			</div>
			<div className={styles.itemCalculated}>
				<div className={styles.itemCalculate}>
					<IconButton onClick={handleDeleteCountAndItem} size="small">
						<RemoveIcon />
					</IconButton>
					<Typography variant={'body1'} component={'span'}>
						{count}
					</Typography>
					<IconButton onClick={handleAddItemInCart} size="small">
						<AddIcon />
					</IconButton>
				</div>
				<div className={styles.itemPrice}>
					<Typography variant={'h4'}>{totalSumm}$</Typography>
					<IconButton onClick={handleDeleteItem} size="small">
						<Image src={CloseIcon} alt={'close-icon'} />
					</IconButton>
				</div>
			</div>
		</Grid>
	);
};

export default ShoppingItem;
