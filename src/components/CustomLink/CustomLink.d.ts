import type { StaticImageData } from "next/image";

export interface ICustomLink {
  text: string;
  withIcon?: string;
  isShopCart?: boolean; 
  shopCount?: number;
  link: string;
  icon: StaticImageData | string;
  onClick?: () => void;
}