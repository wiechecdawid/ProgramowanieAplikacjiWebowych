import { Note } from "../entities/note"
import { Notes } from "./notes"


export default class Seeder {
    title = 'Lorem Ipsum'
    content = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In eget justo scelerisque, mollis diam pellentesque, mattis lorem. Donec in dui ante. Pellentesque in neque quis mi pellentesque interdum. Fusce at tellus convallis dui fermentum venenatis. Aliquam iaculis in nisl ut fermentum. Quisque mollis purus eu pulvinar dapibus. Ut sit amet lectus ut nisi luctus interdum. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Fusce semper dolor quam, ut aliquam dui faucibus sit amet. Sed vel enim in metus lacinia commodo. Vestibulum ultricies urna felis. Vestibulum at odio id neque mollis egestas id a ipsum. Phasellus ullamcorper nulla vitae sapien vulputate tristique eget at nisl. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.'
    
    note1 = new Note(this.title, this.content, true)
    
    note2 = new Note(this.title, this.content, false)
    
    note3 = new Note(this.title, this.content, true)

    notes = new Notes()

    seed = () => {
        if(localStorage.notes.length === 0) {
            this.notes.add(this.note1)
            this.notes.add(this.note2)
            this.notes.add(this.note3)
        }
    }
}