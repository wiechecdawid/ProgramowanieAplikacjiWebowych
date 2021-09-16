import { IAppStorage } from "../interfaces/IAppStorage"
import { Note } from "../entities/note"

export class Notes {
    private storage: IAppStorage

    constructor( storage: IAppStorage ) {
        this.storage = storage
    }

    getAll = () => this.storage.readAll()

    get = ( id: string ) => this.storage.read(id)

    add = ( note: Note ) => {
        this.storage.add(note)
    }
    
    remove = ( note: Note ) => {
        this.storage.delete(note)
    }

    update = ( id: string, note: Note ) => {
        this.storage.update(id, note)
    }
}