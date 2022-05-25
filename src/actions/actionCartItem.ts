import { createAction } from "@reduxjs/toolkit";

import { itemConstants } from "../utils/actionConstants";
import type { ICardItem } from "../components/CardItem/CardItem";

export const addItemInCart = createAction<ICardItem>(itemConstants.addItem)