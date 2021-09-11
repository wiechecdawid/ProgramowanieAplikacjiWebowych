import { ColorsEnum } from '../enums/colors'
import { v4 as uuid} from 'uuid'

interface INote {
    id: string,
    title: string,
    content: string,
    timestamp: number,
    color: ColorsEnum,
    isPinned: boolean,
    isNew: boolean
}

export class Note implements INote {
    id: string
    title: string
    content: string
    timestamp: number
    color: ColorsEnum
    isPinned: boolean
    isNew: boolean
    
    constructor(title: string,
        content: string,
        isPinned = false,
        isNew = true,
        color: ColorsEnum = ColorsEnum.white,
        timestamp: number = Date.now(),
        id: string = uuid()) {

        this.id = id
        this.title = title
        this.content = content
        this.timestamp = timestamp
        this.color = color
        this.isPinned = isPinned
        this.isNew = isNew
    }
}