//Задание 1
let a = 10;
alert(a);
a = 20;
alert(a);
//Задание 2
let release = 2007;
alert(release)
//Задание 3
let creatorJava = 'Брендан Эйх';
alert(creatorJava);
//Задание 4
let s = 10;
let d = 2;
alert(s + d);
alert(s - d);
alert(s * d);
alert(s / d);
//Задание 5
let result = 2 ** 5;
alert(result);
//Задание 6
let x = 9;
let y = 2;
let modul = x % y;
alert(modul);
//Задание 7 не понял задания (*Э*)
let num = 1;
num = num + 5;
num = num - 3;
num = num * 7;
num = num / 3;
num = num + 1;
num = num - 1;
alert(num);
//Задание 8
let ageUser = prompt("Сколько вам лет?");
alert(ageUser);
//Задание 9 (c девятым заданием тоже немного не понимаю как вкладывать в объект динамические переменные, а так же как удалять переменные по заданию которое идёт дальше (сомневаюсь что можно просто стереть или я намудрил?))
const user = {
    name: 'jack',
    age: 27,
    isAdmin: true,
};

//Задание 9.1
user.cityofResidence = 'russia';
alert(user)

//Задание 9.2
let user = { name: 'jack', age: 27 };
person['age'] = 25;

//Задание 9.3
delete user.cityofResidence;

//Задание 9.4
let info = prompt("Какую информацию хотите узнать о пользователе?");
alert(user[info]); 
