import { controllsCreator } from "../elements/controlls-creator"
import { Note } from "../entities/note"
import { ColorsEnum } from "../enums/colors"
import { timeConverter } from "../helpers/time-converter"

export const noteCreator = {
    create: (note: Note) => {
        const controlls = controllsCreator.createControlls()

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