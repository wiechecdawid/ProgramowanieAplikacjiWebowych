import { Note } from "../entities/note";

export interface IAppStorage {
    saveAll: ( notes: Note[] ) => void,
    retrieveAll: () => Note[]
}
