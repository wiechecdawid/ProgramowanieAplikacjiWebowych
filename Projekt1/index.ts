const sumElement = (document.querySelector('#sum') as HTMLInputElement);
const avgElement = (document.querySelector('#avg') as HTMLInputElement);
const minElement = (document.querySelector('#min') as HTMLInputElement);
const maxElement = (document.querySelector('#max') as HTMLInputElement);

const values = [...document.querySelectorAll('.numberInput')];

sumElement.value = sum(values).toString();
avgElement.value = avg(values).toString();
minElement.value = min(values).toString();
maxElement.value = max(values).toString();

let convertToNumbers = (arr: HTMLInputElement[]) => {
    let newArr = [];

    arr.forEach(element => {
        let num = +element.value
        newArr.push(num)
    });

    return newArr
}

values.forEach(val => {
    val.addEventListener('change', modifyOutcomes)
});

function sum(arr: any[]) {
    let temp: number[] = convertToNumbers(arr)    
    let s: number = 0;

    for(let i = 0; i < arr.length; i++)
        s += temp[i]
    
    return s
}

function avg (arr: any[]) {
    let s = sum(arr)

    return s / arr.length
}

function min (arr: any[]) {
    let temp: number[] = convertToNumbers(arr)
    temp.sort((a, b) => a - b)

    return temp[0]
}

function max(arr: any[]) {
    let temp: number[] = convertToNumbers(arr)
    temp.sort((a, b) => a - b)

    return temp[temp.length - 1]
}

const modifyOutcomes = () => {
    sumElement.value = sum(values).toString();
    avgElement.value = avg(values).toString();
    minElement.value = min(values).toString();
    maxElement.value = max(values).toString();
}