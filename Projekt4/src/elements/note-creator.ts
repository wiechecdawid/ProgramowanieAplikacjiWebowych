import ControllsCreator from "./controlls-creator"
import { Note } from "../entities/note"
import { ColorsEnum } from "../enums/colors"
import { timeConverter } from "../helpers/time-converter"
import { Notes } from "../collections/notes"

export default class NoteCreator {
    private notes: Notes

    constructor( notes: Notes ) {
        this.notes = notes
    }

    create = (note: Note) => {
        const creator = new ControllsCreator(this.notes)
        const controlls = creator.createControlls()

        const title = document.createElement('div')
        title.className = 'title'
        title.innerHTML = `<h2>${note.title}</h2><h5>${timeConverter.convert(note.timestamp)}</h5>`

        const content = document.createElement('div')
        content.className = 'content'
        content.innerText = note.content

        const noteElement = document.createElement('div')
        noteElement.classList.add('note')
        noteElement.classList.add(`note-${ColorsEnum[note.color]}`)
        noteElement.id = `note-${note.id}`
        noteElement.append(controlls, title, content)

        return noteElement
    }
}