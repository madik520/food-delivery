import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import CardActionArea from '@mui/material/CardActionArea';
import Badge from '@mui/material/Badge';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Image from 'next/image';
import Link from '../../utils/mui/Link';

import { useAppDispatch } from '../../utils/hooks/AppHooks';
import { addItemInCart, removeItemFromCart, deleteCountItem, sendDataItem } from '../../actions/actionCartItem';

import CartIcon from '../../assets/img/cart.svg';
import AddIcon from '../../assets/img/add-icon.svg';
import RemoveIcon from '../../assets/img/remove-icon.svg';

import { ICardItem } from './CardItem';
import styles from './CardItem.module.scss';


const CardItem = ({
    id,
    img,
    bigImg, 
    title, 
    weight, 
    mainText, 
    price,
    count,
    dishes,
    description,
    ingridients
  }: ICardItem) => {
    const dispatch = useAppDispatch();

    const handleAddItemInCart = () => dispatch(addItemInCart({id, img, bigImg, title, weight, mainText, price, dishes, count: count += 1}));
    const handleDeleteCountAndItem = () => {
      if(count <= 1){
        dispatch(deleteCountItem({id, count: count -= 1, dishes}))
        dispatch(removeItemFromCart(id));
      }else{
        dispatch(deleteCountItem({id, count: count -= 1, dishes}))
      }
    }

    const sendItemDetails = () => dispatch(sendDataItem({ id, img, bigImg, title, weight, mainText, price, dishes, count, description, ingridients }))

  return(
    <Card className={styles.cardItem}>
      <Link onClick={sendItemDetails} href={`/card-info/${id}`}>
        <CardActionArea className={styles.cardImg}>
          <Image src={img} alt="img" placeholder={'blur'} layout={'responsive'} />
        </CardActionArea>
        <div className={styles.badge}>
        <Badge badgeContent={count} color={"primary"} />
      </div>
      </Link>
      <CardContent>
        <Typography className={styles.cardHeader} gutterBottom variant="h5" component="div">
          {title}
        <Typography variant="body2" color="text.secondary">Weight: {weight}g</Typography>
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {mainText}
        </Typography>
      </CardContent>
      {count > 0 
        ?
        <CardActions className={styles.cardFooterWithCount}>
          <Button onClick={handleDeleteCountAndItem} variant="contained" endIcon={<Image src={RemoveIcon} alt={'icon'} />} />
          <Typography variant="h5" component="div">
            {`${price ? price : 0} $`}
          </Typography>
          <Button onClick={handleAddItemInCart} variant="contained" endIcon={<Image src={AddIcon} alt={'icon'} />} />
        </CardActions>
        :
        <CardActions className={styles.cardFooter}>
          <Typography variant="h5" component="div">
            {`${price ? price : 0} $`}
          </Typography>
          <Button onClick={handleAddItemInCart} variant="contained" endIcon={<Image src={CartIcon} alt={'icon'} />}>
            In Cart
          </Button>
        </CardActions>
      }
    </Card>
  );
};

export default CardItem;