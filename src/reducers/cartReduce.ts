import { createReducer } from "@reduxjs/toolkit";

import { addItemInCart, removeItemFromCart, deleteCountItem } from "../actions/actionCartItem";
import { IState } from "../utils/types";
import { ICardItem } from "../components/CardItem/CardItem";
import { coldSnacks, hotSnacks, meatDishes } from '../utils/datas/cardData/cardData';

const initialState: IState = {
  cartData: {
    coldSnacks: coldSnacks as [],
    hotSnacks: hotSnacks as [],
    meatDishes: meatDishes as []
  },
  shoppingCart: [] as ICardItem[]
}

const shoppingCart = createReducer(initialState, (builder) => {
  builder.addCase(addItemInCart, (state, action) => {
    const currentItem = action.payload;
    const pushToCart = [...state.shoppingCart, currentItem];
    const deleteDublicate = Array.from(new Set(pushToCart.map(a => a?.id)))
    .map(id => {
      return pushToCart.find(a => a?.id === id)
    });
    const newShoppingCart = deleteDublicate.map((i) => i?.id === currentItem.id ? currentItem : i );
    const updateCardItem = state.cartData[currentItem.dishes].map((i) => i.id === currentItem.id ? currentItem : i);

    state.shoppingCart = newShoppingCart as [];
    state.cartData[currentItem.dishes] = updateCardItem;
  });
  builder.addCase(removeItemFromCart, (state, action) => {
    const newData = state.shoppingCart.filter((i) => i.id !== action.payload);

    state.shoppingCart = newData;
  });
  builder.addCase(deleteCountItem, (state, action) => {
    const { id, count, dishes } = action.payload;
    const updateCountCardItem = state.cartData[dishes].map((i) => i.id === id ? {...i, count: count} : i);
    const updateCountShoppingCart = state.shoppingCart.map((i) => i.id === id ? {...i, count: count} : i);

    state.cartData[dishes] = updateCountCardItem;
    state.shoppingCart = updateCountShoppingCart;
  })
  builder.addDefaultCase((state, action) => state);
});

export default shoppingCart;