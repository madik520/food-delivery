import { ICardItem } from '../CardItem/CardItem';

export interface IShoppingList {
	shoppingData: ICardItem[];
	addToOrderData: ICardItem[];
}
