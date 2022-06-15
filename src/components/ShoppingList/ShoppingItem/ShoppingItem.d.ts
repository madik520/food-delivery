import type { StaticImageData } from "next/image";

export interface IShoppingItem {
  id: number;
  img: StaticImageData | string;
  title: string; 
  price: number;
  count: number;
  ingridients?: string;
}