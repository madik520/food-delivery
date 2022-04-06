export interface ICustomLink {
  text: string;
  withIcon?: string;
  isShopCart?: boolean; 
  shopCount?: number;
  link: string;
  onClick?: () => void;
}