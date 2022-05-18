import { ICardItem } from '../../components/CardItem/CardItem';

export interface IState {
  cart: {
    coldSnacks: ICardItem[];
    hotSnacks: ICardItem[];
    meatDishes: ICardItem[];
  }
}