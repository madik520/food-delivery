import { createAction } from '@reduxjs/toolkit';

import { itemConstants } from '../utils/actionConstants';

import type { ICardItem } from '../components/CardItem/CardItem';
import type { IDeleteCount } from '../utils/types';

export const addItemInCart = createAction<ICardItem>(itemConstants.addItem);

export const removeItemFromCart = createAction<number>(itemConstants.deleteItem);

export const deleteCountItem = createAction<IDeleteCount>(itemConstants.deleteCount);

export const sendDataItem = createAction<ICardItem>(itemConstants.itemDescription);
