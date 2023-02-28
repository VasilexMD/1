
// Программа для вывода 10% от введенного числа:

let input = prompt("Введите число:");
let number = parseInt(input);
let result = number * 0.1;
console.log(result);

// Программа для вывода наименьшего из двух чисел:

let input1 = prompt("Введите первое число:");
let input2 = prompt("Введите второе число:");
let number1 = parseInt(input1);
let number2 = parseInt(input2);
if (number1 < number2) {
  console.log(number1);
} else {
  console.log(number2);
}

// Программа для вывода сообщения о введенном числе:

let input = prompt("Введите число:");
let number = parseInt(input);
if (number < 100) {
    console.log("Число меньше 100");
} else if (number > 100) {
    console.log("Число больше 100");
} else {
    console.log("Число равно 100");
}


// Написать программу, которая запрашивает у пользователя
// его имя и возраст(в годах) и выводит в консоль сообщение
// ‘Hello, <name>’, если пользователь совершеннолетний,
// или ‘Hi, <name>’, если пользователь несовершеннолетний.

let name = prompt("Введите ваше имя:");
let age = prompt("Введите ваш возраст (в годах):");
if (age >= 18) {
  console.log(`Hello, ${name}!`);
} else {
  console.log(`Hi, ${name}!`);
}
