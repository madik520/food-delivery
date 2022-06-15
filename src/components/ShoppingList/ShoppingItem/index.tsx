import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import Image from 'next/image';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';

import type { IShoppingItem } from './ShoppingItem';

import styles from './ShoppingItem.module.scss';

const ShoppingItem = ({ id, img, title, ingridients, count, price }:IShoppingItem) => {

  return (
    <Grid item>
      <div>
        <div>
          <Image src={img} alt={'image'} />
        </div>
        <div>
          <Typography variant={'h4'}>{title}</Typography>
          <Typography variant={'body1'}>{ingridients}</Typography>
          <div>
            <div>
              <IconButton size='small'>
                <RemoveIcon />
              </IconButton>
              <Typography variant={'body1'} component={'span'}>{count}</Typography>
              <IconButton size='small'>
                <AddIcon />
              </IconButton>
            </div>
            <div></div>
          </div>
        </div>
      </div>
      <div>

      </div>
    </Grid>
  );
};

export default ShoppingItem;