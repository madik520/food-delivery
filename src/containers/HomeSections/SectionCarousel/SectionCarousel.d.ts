import { ICardItem } from '../../../components/CardItem/CardItem';

export interface ISectionCarousel {
    id: string;
    title: string;
    cardData: ICardItem[]
    borderBottom?: boolean;
}