import { ICardItem } from '../../components/CardItem/CardItem';

export interface ISectionCarousel {
    title: string;
    cardData: ICardItem[]
    borderBottom?: boolean;
}