//Задание 1
const password = String('1104');
let youPassword = String(prompt('Введите пароль'));
password === youPassword ? alert('Пароль введён верно') : alert('Пароль введён неправильно');
//Задание 2
let c = String(prompt('введите число'));
if (c > 0 && c < 10) {
    console.log('Верно');

} else {
    console.log('Неверно');

};
//Задание 3
let d = prompt('введите первое число');
const e = prompt('введите второе число');
if (d >= 100 || e >= 100) {
    console.log('верно')

} else {
    console.log('неверно')

};
//Задание 4
let a = '2';
let b = '3';
// Код выше изменять менять нельзя, чтобы решить задачу исправьте код ниже: 
let a1 = Number(a);
let b1 = Number(b);
alert(a1 + b1);
//Задание 5
let monthNumber = prompt('введите месяц');
switch (monthNumber) {
    case 1 && 2 && 12:
        console.log('зима')
        break;
    case 3 && 4 && 5:
        console.log('весна')
        break;
    case 6 && 7 && 8:
        console.log('лето')
        break;
    case 9 && 10 && 11:
        console.log('осень')
        break;
    default: console.log('такого месяца не существует')
        break;
}