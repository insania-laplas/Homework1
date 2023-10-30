//1
const str = 'js';
const upperCaseStr = str.toUpperCase();
console.log(upperCaseStr);
//2
function filterArrayByPrefix(array, prefix) {
  return array.filter(item => item.toLowerCase().startsWith(prefix.toLowerCase()));
}

const strings = ['apple', 'banana', 'Orange', 'grapefruit', 'kiwi'];
const prefix = 'o';
const filteredArray = filterArrayByPrefix(strings, prefix);
console.log(filteredArray);
//2
function searchStart(array, prefix) {
  return array.filter(item => item.toLowerCase().startsWith(prefix.toLowerCase()));
}

console.log(searchStart(['Кошка', 'Кит', 'Комар', 'Носорог'], 'ко'));
console.log(searchStart(['яблоко', 'груша', 'гриб', 'огурец'], 'гру'));
console.log(searchStart(['Дом', 'Банк', 'Больница', 'Театр'], 'Кино'));
//3
Math.floor(32.58884);
Math.ceil(32.58884);
Math.round(32.58884);
//4
const numbers = [52, 53, 49, 77, 21, 32];
const min = Math.min(...numbers);
const max = Math.max(...numbers);
console.log(min, max);
//5
function getRandomNumber() {
  const randomNumber = Math.floor(Math.random() * 10) + 1;
  console.log(randomNumber);
}

getRandomNumber();
//6
function getRandomArrNumbers(number) {
  const arrayLength = Math.floor(number / 2);
  const randomArray = [];

  for (let i = 0; i < arrayLength; i++) {
    const randomNum = Math.floor(Math.random() * (number + 1));
    randomArray.push(randomNum);
  }

  return randomArray;
}
console.log(getRandomArrNumbers(7));
console.log(getRandomArrNumbers(12));
//7
const randomNumber = getRandomNumberInRange(1, 10);
console.log(randomNumber);
function getRandomNumberInRange(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
//8
console.log(new Date().toLocaleDateString());
//9
const currentDate = new Date();
currentDate.setDate(currentDate.getDate() + 73);
console.log(currentDate.toLocaleDateString());
//10 (вот здесь игрался с ; но что то не получается)
function formatDate(date) {
  const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
  const formattedDate = date.toLocaleDateString('ru-RU', options);
  const time = date.toLocaleTimeString();
  return Date ${ formattedDate } - это ${ formattedDate.split(',')[0] }time ${ time };
}

const currentDate = new Date();
console.log(formatDate(currentDate));

