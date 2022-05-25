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
import { addItemInCart } from '../../actions/actionCartItem';

import CartIcon from '../../assets/img/cart.svg';
import { ICardItem } from './CardItem';
import styles from './CardItem.module.scss';

const CardItem = ({
    id,
    img, 
    title, 
    spanText, 
    mainText, 
    price,
    count,
    dishes
  }: ICardItem) => {
    const dispatch = useAppDispatch();

    const handleAddItemInCart = () => dispatch(addItemInCart({id, img, title, spanText, mainText, price, dishes, count: count += 1}));

  return(
    <Card className={styles.cardItem}>
      <Link href={`/card-info/${id}`}>
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
        <Typography variant="body2" color="text.secondary">{spanText}</Typography>
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {mainText}
        </Typography>
      </CardContent>
      <CardActions className={styles.cardFooter}>
        <Typography variant="h5" component="div">
          {`${price ? price : 0} $`}
        </Typography>
        <Button onClick={handleAddItemInCart} variant="contained" endIcon={<Image src={CartIcon} alt={'icon'} />}>
          In Cart
        </Button>
      </CardActions>
    </Card>
  );
};

export default CardItem;