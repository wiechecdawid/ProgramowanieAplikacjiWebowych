const sumElement = (document.querySelector('#sum') as HTMLInputElement);
const avgElement = (document.querySelector('#avg') as HTMLInputElement);
const minElement = (document.querySelector('#min') as HTMLInputElement);
const maxElement = (document.querySelector('#max') as HTMLInputElement);

const valAdder = document.querySelector('.addInputs') as HTMLInputElement;

//const values = [...document.querySelectorAll('.numberInput')] as HTMLInputElement[];

const convertToNumbers = (arr: HTMLInputElement[]) => {
    let newArr = [];

    arr.forEach(element => {
        let num = +element.value
        newArr.push(num)
    });

    return newArr
}

const deleteButton = document.querySelector('#deleteButton') as HTMLButtonElement;

const createInputs = (inputsCount: number) => {
    let temp: HTMLInputElement[] = [];
    
    for(let i = 0; i < inputsCount; i++) {
        let inp = document.createElement('input');
        inp.className = 'dataInput'
        temp.push(inp);
    }

    return temp;
}

valAdder.addEventListener('change', () => {
    let container = document.querySelector('.inputs') as HTMLDivElement;
    let inputsDiv = document.createElement('div') as HTMLDivElement;

    container.appendChild(inputsDiv);

    let count: number = +valAdder.value;

    for(let i = 0; i < count; i++) {
        let newInput = document.createElement('input') as HTMLInputElement;
        //newInput.type = "number"
        newInput.className = 'numberInput'
        newInput.value = '0'
      
        inputsDiv.appendChild(newInput);

        let children = [...newInput.parentElement.children] as HTMLInputElement[];
        newInput.addEventListener('input', () =>{
            validateInput(newInput)
            modifyOutcomes(children)
        })
    }
});

deleteButton.addEventListener('click', () => {
    let inputs = [...document.querySelectorAll('.numberInput')] as HTMLInputElement[];

    console.log(inputs)

    for(let i = 0; i < inputs.length; i++) {
        inputs[i].parentNode.removeChild(inputs[i]);
    }

    console.log(inputs)
})

function sum(arr: HTMLInputElement[]) {
    let temp: number[] = convertToNumbers(arr)    
    let s: number = 0;

    for(let i = 0; i < arr.length; i++)
        s += temp[i]
    
    return s
}

function avg (arr: HTMLInputElement[]) {
    let s = sum(arr)

    return s / arr.length
}

function min (arr: HTMLInputElement[]) {
    let temp: number[] = convertToNumbers(arr)
    temp.sort((a, b) => a - b)

    return temp[0]
}

function max(arr: HTMLInputElement[]) {
    let temp: number[] = convertToNumbers(arr)
    temp.sort((a, b) => a - b)

    return temp[temp.length - 1]
}

function modifyOutcomes(values: HTMLInputElement[]) {
    sumElement.value = sum(values).toString();
    avgElement.value = avg(values).toString();
    minElement.value = min(values).toString();
    maxElement.value = max(values).toString();
}

function validateInput(input: HTMLInputElement) {
    let validation = document.querySelector('.validation') as HTMLDivElement;

    if(isNaN(+input.value)) {
        validation.style.visibility = 'visible'
    } else {
        validation.style.visibility = 'hidden'
    }
}