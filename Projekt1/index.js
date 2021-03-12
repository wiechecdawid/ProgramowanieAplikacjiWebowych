const sumElement = document.querySelector('#sum');
const avgElement = document.querySelector('#avg');
const minElement = document.querySelector('#min');
const maxElement = document.querySelector('#max');
const valAdder = document.querySelector('.addInputs');
//const values = [...document.querySelectorAll('.numberInput')] as HTMLInputElement[];
const convertToNumbers = (arr) => {
    let newArr = [];
    arr.forEach(element => {
        let num = +element.value;
        newArr.push(num);
    });
    return newArr;
};
const createInputs = (inputsCount) => {
    let temp = [];
    for (let i = 0; i < inputsCount; i++) {
        let inp = document.createElement('input');
        inp.className = 'dataInput';
        temp.push(inp);
    }
    return temp;
};
valAdder.addEventListener('change', () => {
    let container = document.querySelector('.inputs');
    let inputsDiv = document.createElement('div');
    container.appendChild(inputsDiv);
    let count = +valAdder.value;
    for (let i = 0; i < count; i++) {
        let newInput = document.createElement('input');
        newInput.type = "number";
        newInput.value = '0';
        inputsDiv.appendChild(newInput);
        let children = [...newInput.parentElement.children];
        newInput.addEventListener('input', () => {
            if (isNaN(+newInput))
                modifyOutcomes(children);
        });
    }
});
function sum(arr) {
    let temp = convertToNumbers(arr);
    let s = 0;
    for (let i = 0; i < arr.length; i++)
        s += temp[i];
    return s;
}
function avg(arr) {
    let s = sum(arr);
    return s / arr.length;
}
function min(arr) {
    let temp = convertToNumbers(arr);
    temp.sort((a, b) => a - b);
    return temp[0];
}
function max(arr) {
    let temp = convertToNumbers(arr);
    temp.sort((a, b) => a - b);
    return temp[temp.length - 1];
}
function modifyOutcomes(values) {
    sumElement.value = sum(values).toString();
    avgElement.value = avg(values).toString();
    minElement.value = min(values).toString();
    maxElement.value = max(values).toString();
}
//# sourceMappingURL=index.js.map