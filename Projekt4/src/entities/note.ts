import { ColorsEnum } from '../enums/colors'
import { v4 as uuid} from 'uuid'

interface INote {
    id: string,
    title: string,
    content: string,
    timestamp: number,
    color: ColorsEnum
}

export class Note implements INote {
    id: string
    title: string
    content: string
    timestamp: number
    color: ColorsEnum
    
    constructor(id: string = uuid(),
        title: string,
        content: string,
        timestamp: number = Date.now(),
        color: ColorsEnum) {

        this.id = id
        this.title = title
        this.content = content
        this.timestamp = timestamp
        this.color = color
    }
}