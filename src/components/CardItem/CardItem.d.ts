import type { StaticImageData } from "next/image";

export interface ICardItem {
  id: number;
  img: StaticImageData | string;
  title: string; 
  spanText: string;
  mainText: string;
  price: number;
}