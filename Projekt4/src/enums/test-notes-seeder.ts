import { Note } from "../entities/note"
import { ColorsEnum } from "./colors"
import { Notes } from "../collections/notes"


export default class Seeder {
    title = 'Lorem Ipsum'
    content = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In eget justo scelerisque, mollis diam pellentesque, mattis lorem. Donec in dui ante. Pellentesque in neque quis mi pellentesque interdum. Fusce at tellus convallis dui fermentum venenatis. Aliquam iaculis in nisl ut fermentum. Quisque mollis purus eu pulvinar dapibus. Ut sit amet lectus ut nisi luctus interdum. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Fusce semper dolor quam, ut aliquam dui faucibus sit amet. Sed vel enim in metus lacinia commodo. Vestibulum ultricies urna felis.'
    
    note1 = new Note(this.title, this.content, true, ColorsEnum.blue)
    
    note2 = new Note(this.title, this.content, false, ColorsEnum.orange)
    
    note3 = new Note(this.title, this.content, true, ColorsEnum.green)

    notes = new Notes()

    seed = () => {
        if(!localStorage.getItem('notes') ||
            localStorage.notes.length === null) {
            this.notes.add(this.note1)
            this.notes.add(this.note2)
            this.notes.add(this.note3)
        }
    }
}