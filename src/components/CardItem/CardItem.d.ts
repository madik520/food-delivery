import type { StaticImageData } from 'next/image';

type DescriptionTypes = {
	id: string;
	col: string;
	val: string;
};

export enum dishesNames {
	coldSnacks = 'coldSnacks',
	hotSnacks = 'hotSnacks',
	meatDishes = 'meatDishes'
}

export interface ICardItem {
	id: number;
	img: StaticImageData | string;
	bigImg: StaticImageData | string;
	title: string;
	weight: number;
	mainText: string;
	price: number;
	count: number;
	totalSumm: number;
	dishes: dishesNames.coldSnacks | dishesNames.hotSnacks | dishesNames.meatDishes;
	ingridients?: string;
	description?: DescriptionTypes[];
}
