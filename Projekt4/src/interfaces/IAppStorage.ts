import { Note } from "../entities/note";

export interface IAppStorage {
    saveAll: ( notes: Note[] ) => void,
    readAll: () => Note[],
    add: ( note: Note ) => void,
    read: ( id: string ) => Note,
    delete: ( note: Note ) => void,
    update: ( id: string, note: Note ) => void
}
