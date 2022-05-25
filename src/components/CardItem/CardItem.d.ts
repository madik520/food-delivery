import type { StaticImageData } from "next/image";

enum dishesNames {
  coldSnacks = "coldSnacks",
  hotSnacks = "hotSnacks",
  meatDishes = "meatDishes"
}

export interface ICardItem {
  id: number;
  img: StaticImageData | string;
  title: string; 
  spanText: string;
  mainText: string;
  price: number;
  count: number;
  dishes: dishesNames.coldSnacks | dishesNames.hotSnacks | dishesNames.meatDishes;
}