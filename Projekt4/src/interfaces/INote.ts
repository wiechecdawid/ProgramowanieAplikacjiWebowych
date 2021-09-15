import { ColorsEnum } from "../enums/colors";

export interface INote {
    id: string,
    title: string,
    content: string,
    timestamp: number,
    color: ColorsEnum,
    isPinned: boolean,
    isNew: boolean
}