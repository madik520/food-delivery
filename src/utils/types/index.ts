import { dishesNames, ICardItem } from '../../components/CardItem/CardItem';

export interface IState {
  cartData: {
    coldSnacks: ICardItem[];
    hotSnacks: ICardItem[];
    meatDishes: ICardItem[];
  },
  shoppingCart: ICardItem[];
  itemDescription: ICardItem
}

export interface IDeleteCount {
  id: number;
  count: number;
  dishes: dishesNames.coldSnacks | dishesNames.hotSnacks | dishesNames.meatDishes;
}