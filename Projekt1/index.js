const sumElement = document.querySelector('#sum');
const avgElement = document.querySelector('#avg');
const minElement = document.querySelector('#min');
const maxElement = document.querySelector('#max');
const values = [...document.querySelectorAll('.numberInput')];
sumElement.value = sum(values).toString();
avgElement.value = avg(values).toString();
minElement.value = min(values).toString();
maxElement.value = max(values).toString();
let convertToNumbers = (arr) => {
    let newArr = [];
    arr.forEach(element => {
        let num = +element.value;
        newArr.push(num);
    });
    return newArr;
};
values.forEach(val => {
    val.addEventListener('change', modifyOutcomes);
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
const modifyOutcomes = () => {
    sumElement.value = sum(values).toString();
    avgElement.value = avg(values).toString();
    minElement.value = min(values).toString();
    maxElement.value = max(values).toString();
};
//# sourceMappingURL=index.js.map