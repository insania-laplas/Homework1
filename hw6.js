//1
let array = [1, 5, 4, 10, 0, 3];

for (let i = 0; i < array.length; i++) {
    if (array[i] === 10) {
        break;
    }
    console.log(array[i]);
}
//2
let array2 = [1, 5, 4, 10, 0, 3];
let index = array2.indexOf(4);

console.log(index);
//3
let array3 = [1, 3, 5, 10, 20];
let space = array3.join(' ');
console.log(space);
//4
let multiArray = [];

for (let i = 0; i < 3; i++) {
    let innerArray = [];
    for (let j = 0; j < 3; j++) {
        innerArray.push(1);
    }
    multiArray.push(innerArray);
}

console.log(multiArray);
//5
let array4 = [1, 1, 1];
array4.push(2, 2, 2);
console.log(array4);
//6
let array5 = [9, 8, 7, 'a', 6, 5];
array = array5.filter(item => typeof item === 'number');
array5.sort();
console.log(array5);
//7
let array6 = [9, 8, 7, 6, 5];
let userInput = prompt("Угадай число:");

if (array6.includes(Number(userInput))) {
    alert("Угадал");
} else {
    alert("Не угадал");
}
//8 
const str = 'abcdef';
const reversedStr = str.split('').reverse().join('');
console.log(reversedStr);
//9
const array7 = [[1, 2, 3], [4, 5, 6]];
const flattenedArray = array.flat();
console.log(flattenedArray7);
//10
const array8 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

for (let i = 0; i < array8.length - 1; i++) {
    const sum = array8[i] + array8[i + 1];
    console.log(sum);
}
//11
function squareArray(arr) {
    return arr.map(num => num ** 2);
}

const numbers = [1, 2, 3, 4, 5];
const squaredNumbers = squareArray(numbers);
console.log(squaredNumbers);
//12
function getLengthWords(arr) {
    return arr.map(word => word.length);
}

const words = ['слово', '', 'слог', 'длинное предложение', 'буква'];
const wordLengths = getLengthWords(words);
console.log(wordLengths);
//13
function filterPositive(array) {
    return array.filter(num => num < 0);
}

console.log(filterPositive([-1, 0, 5, -10, 56]));
console.log(filterPositive([-25, 25, 0, -1000, -2]));
//14

