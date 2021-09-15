import { colorsMapper } from "../helpers/colors-mapper"

export const noteFormCreator = {
    create: () => {
        const formClasses = ['add-note', 'add-note-form']
        const wrapper = document.createElement('div')
        wrapper.classList.add(formClasses[0])

        const displayButton = document.createElement('button')
        displayButton.classList.add('button', 'display-button')
        displayButton.innerHTML = '&#43;'
        displayButton.addEventListener('click', displayForm)

        const form = document.createElement('form')
        //form.method = 'post'
        form.classList.add(...formClasses)

        const title = createInput('title')
        const content = createInput('content')

        const dropdownLabel = createLabel('color')
        const dropdown = createDropdown('color')
        dropdownLabel.appendChild(dropdown)

        const submitButton = document.createElement('input')
        submitButton.type = 'submit'
        submitButton.classList.add('button', 'submit-button')

        form.append(title, content, dropdownLabel, submitButton)

        wrapper.append(displayButton, form)

        return wrapper
    }
}

function displayForm() {
    const form = document.querySelector('.add-note.add-note-form') as HTMLFormElement
    form.hidden = form.hidden ? false: true
}

function createInput(inputName: string) {
    const wrapper = document.createElement('div')
    wrapper.classList.add(inputName)

    const label = createLabel(inputName)

    const input = document.createElement('input')
    input.classList.add('input', `input-${inputName}`)

    label.appendChild(input)
    wrapper.appendChild(label)

    return wrapper
}

function createDropdown(inputName: string) {
    const colors = colorsMapper.map()

    const dropdown = document.createElement('select')
    dropdown.name = `${inputName}`
    dropdown.classList.add('select', `select-${inputName}`)

    const options = colors.map( color => {
        const opt = document.createElement('option')
        opt.classList.add('option', `option-${color}`)
        opt.value = `${color}`
        opt.innerText = `${color}`

        return opt
    })

    dropdown.append(...options)

    return dropdown
}

function createLabel(inputName: string){
    const label = document.createElement('label')
    label.classList.add('label', `label-${inputName}`)
    label.innerText = `${inputName}: `

    return label
}