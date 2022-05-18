import { IState } from "../utils/types";
import { coldSnacks, hotSnacks, meatDishes } from '../utils/datas/cardData/cardData';

const initialState: IState = {
  cart: {
    coldSnacks: coldSnacks,
    hotSnacks: hotSnacks,
    meatDishes: meatDishes
  }
}

const shoppingCart = (state = initialState, action: any) => {
  switch(action.type){
    default:
      return state;
  }
};

export default shoppingCart;