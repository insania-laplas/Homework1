//1
function smallerNumber(a, b) {
    return Math.min(a, b);
}

console.log(smallerNumber(8, 4));
//2
function checkEvenOdd(number) {
    if (number % 2 == 0) {
        return 'Число четное';
    } else {
        return 'Число нечетное';
    }
}

console.log(checkEvenOdd(8));
console.log(checkEvenOdd(335));
//3
function square(number) {
    console.log(number * number);
}

square(5);
//3.2
function calcSquare(number) {
    return number * number;
}

console.log(calcSquare(5));
//4
function ageUser() {
    let age = parseInt(prompt("Сколько вам лет?"));

    if (age < 0) {
        console.log("Вы ввели неправильное значение.");
    } else if (age >= 0 && age <= 12) {
        console.log("Привет, друг!");
    } else {
        console.log("Добро пожаловать!");
    }
}

ageUser();
//5
function multiplyNumbers(num1, num2) {
    if (isNaN(num1) || isNaN(num2)) {
        return 'Одно или оба значения не являются числом';
    }

    return num1 * num2;
}

console.log(multiplyNumbers(5, 4));
console.log(multiplyNumbers('sdfsdf', 4));
//6 
function cubeNumber() {
    let number = Number(prompt('Введите число:'));
    if (isNaN(number)) {
        return 'Переданный параметр не является числом';
    } else {
        let result = number ** 3;
        return `${number} в кубе равняется ${result}`;
    }
}

for (let i = 0; i <= 10; i++) {
    console.log(cubeNumber(i));
}
//7 
const circle1 = {
    radius: 5,
    getArea() {
      return Math.PI * this.radius ** 2;
    },
    getPerimeter() {
      return 2 * Math.PI * this.radius;
    }
  };
  
  const circle2 = {
    radius: 8,
    getArea() {
      return Math.PI * this.radius ** 2;
    },
    getPerimeter() {
      return 2 * Math.PI * this.radius;
    }
  };
//8




