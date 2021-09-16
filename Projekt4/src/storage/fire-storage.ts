import firebase from "firebase";
import { firebaseConfig } from "../config";
import { Note } from "../entities/note";
import { IAppStorage } from "../interfaces/IAppStorage";

export default class FireStorage implements IAppStorage {
    private db: firebase.firestore.Firestore

    constructor() {
        const app = firebase.initializeApp(firebaseConfig)
        this.db = app.firestore()
    }

    readAll = () => {
        let notes: Note[]
        this.db.collection('notes').get()
            .then( res => res.docs)
            .then( docs => notes = docs.map( doc => {
                const note = { ...doc.data() } as Note 
                return note
            }))

        return notes
    }

    add = async(note: Note) => {
        const res = await this.db.collection('notes').add(note)
    }

    read = (id: string) => {
        let note: Note
        
        this.db.collection('notes').doc(id).get()
            .then( res => note = { ...res.data() } as Note
        )

        return note
    }

    delete = async(note: Note) => {
        const res = await this.db.collection('notes')
            .doc(note.id).delete()
    }
    update = async(id: string, note: Note) => {
        const res = await this.db.collection('notes')
    }
}