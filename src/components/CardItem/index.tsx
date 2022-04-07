import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Image from 'next/image';

import CartIcon from '../../assets/img/cart.svg';
import { ICardItem } from './CardItem';

const CardItem = ({ 
    img, 
    title, 
    spanText, 
    mainText, 
    price 
  }: ICardItem) => {
  return(
    <Card sx={{ maxWidth: 325 }}>
      <CardMedia
        component="img"
        height="140"
        image={img}
        alt="item"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {title}
          <span>{spanText}</span>
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {mainText}
        </Typography>
      </CardContent>
      <CardActions>
        <Typography variant="h5" component="div">
          {`${price ? price : 0} $`}
        </Typography>
        <Button variant="contained" endIcon={<Image src={CartIcon} alt={'icon'} />}>
          In Cart
        </Button>
      </CardActions>
    </Card>
  );
};

export default CardItem;