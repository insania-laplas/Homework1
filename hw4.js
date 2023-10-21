//1
let a = 1;
while (a <= 2) {
    console.log('привет');
    a++;

}
// 2
let i = 1;
do {
    console.log(i);
    i++;
} while (i < 6);
//3
let y = 7;
do {
    console.log(i);
    y++;
} while (y < 23);

//4
const obj = {
    'Коля': '200',
    'Вася': '300',
    'Петя': '400'
};

for (let key in obj) {
    console.log(`${key} — зарплата ${obj[key]} долларов.`);
}
//5
let num = 0;
let i;

for (i = 1000; i >= 50; i = i / 2) {
    num = num + 1;
}
console.log('Количество итераций: ', num);
console.log('Результат: ', i);
// 6
for (let i = 1;
    i <= 31;
    i += 7) {

    console.log(`Сегодня пятница ${i}-е число. Необходимо подготовить отчет.  `);

}


