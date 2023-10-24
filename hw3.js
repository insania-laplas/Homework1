//1
let password = '1104';
let userInput = prompt('Введите пароль');

if (userInput === password) {
    console.log('Пароль введен верно');
} else {
    console.log('Пароль введен неправильно');
}
//2
let c = 0;

if (c > 0 && c < 10) {
    console.log('Верно');
} else {
    console.log('Неверно');
}
//3
let d = 50;
let e = 120;

if (d > 100 || e > 100) {
    console.log('Верно');
} else {
    console.log('Неверно');
}
//4
let a = '2';
let b = '3';
// Код выше изменять менять нельзя, чтобы решить задачу исправьте код ниже: 
alert(Number(a) + Number(b));
//5
function Season(month) {
    let month = Number(prompt('Номер месяца'));
    if (month === 12 || month === 1 || month === 2) {
        return "Зима";
    } else if (month >= 3 && month <= 5) {
        return "Весна";
    } else if (month >= 6 && month <= 8) {
        return "Лето";
    } else if (month >= 9 && month <= 11) {
        return "Осень";
    } else {
        return "Неправильный номер месяца";
    }
}