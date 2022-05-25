import { ICardItem } from '../../components/CardItem/CardItem';

export interface IState {
  cartData: {
    coldSnacks: ICardItem[];
    hotSnacks: ICardItem[];
    meatDishes: ICardItem[];
  },
  shoppingCart: ICardItem[];
}