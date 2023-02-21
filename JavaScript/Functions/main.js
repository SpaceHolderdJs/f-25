// function fn1 (
//     //arguments
// ) {
//     // body
//     // return value
// }
// const fn2 = function () {}

// const sum = function (a, b) {
//    return a + b;
// };

// const num1 = 100;
// const num2 = 1000;
// const num3 = Infinity;
// const num4 = 1000;

// const sumResult = sum(num1, num2);
// console.log(sumResult, "sumResult");

//Написати функцію, що приймає сторони прямокутника та рахує та виводить його площу та переметр

//Написати функцію що приймає у аргументи name, surname, age та повертає object з одноіменними полями
// {name: "Igor", surname: "Sergienko", age: 23}

// function createPerson(name, surname, age) {
//   return {
//     name,
//     surname,
//     age,
//     sayHello: function () {
//       console.log(`Hello my name is ${name}, I am ${age}`);
//     },
//     birthday: function () {
//       console.log(`Now age is ${age + 1}`);
//     },
//   };
// }

// const person1 = createPerson("Igor", "Sergienko", 23);
// person1.sayHello();
// person1.birthday();

// const person2 = createPerson("Yula", "Surname", 25);
// person2.sayHello();
// person2.birthday();

// Написати функцію яка створює машину за переданими параметрами name, price, color
// 1. Додати метод до автомобіля, який робить "знижку" на 10% від його ціни
// 2. Додати метод який приймає аргументом нову ціну та повертає НОВУ машину на базі старих значень та нової ціни
// function (price) ----> {}

// function createCar(name, price, color) {
//   return {
//     name,
//     price,
//     color,
//     discaunt: function () {
//       return price - price * 0.1;
//     },
//     newPrice: function (price2) {
//       return { name, color, price: price2 };
//     },
//   };
// }
// const car = createCar("Ravon", 12000, "black");
// console.log(car.discaunt());
// console.log(car.newPrice(1000000000), "!!!!!");

// const arr1 = [{name: "Igor", age: 20}, {name: "Oleg", age: 40}];
// [["name", "Igor"], ["age", 20], ["name", "Oleg], ["age", 40]]

//// ["name", "Igor", "age", 20, "name", "Oleg, "age", 40]

// const flattedArray = arr1.map((obj) => {
//   const resultElement = [];

//   for (let key in obj) {
//     resultElement.push(key);
//     resultElement.push(obj[key]);
//   }

//   return resultElement;
// }).flat();

// const result = flattedArray.reduce((acc, el, i, arr) => {
//   arr[i + 1] && acc.push([el, arr[i + 1]]);
//   return acc;
// }, [])

// console.log(
//   result
//   , 'result');

//   console.log(result.filter((e, i) => !Boolean(i % 2)), 'result final');

//   console.log(Object.entries({name: "Igor", age: 20}), "!!!");

//   console.log(arr1.map((obj) => Object.entries(obj)).flat(), "!!!!result2");

// 2. Написати функцію що отримує об`єкт та повертає всі його ключі у вигляді масиву

// {name: “Igor”, age: 23} → [”name”, “age”]

// function keys (obj) {
//   return Object.keys(obj);
// }

// console.log(keys({name: "Igor", age: 23}), "result!");
// main();

// function main() {} //function declaration
// const main2 = function () {}; //function expression
// const main3 = () => {}; //function arrow

// function car(name, price, color) {
//   return {
//     name,
//     price,
//     color,
//     showCar: function () {
//       console.log(this, "this1");
//     },
//     changeInfo: function (key, value) {
//       this[key] = value;
//       return {...this};
//     },
//   };
// }

// const arrowFunction = function (name, price, color) {
//   return {
//     name,
//     price,
//     color,
//     showCar: () => {
//       console.log(this, "this");
//     },
//     changeInfo: (key, value) => {
//       this[key] = value;
//       return this;
//     },
//   };
// }

// const arrowCar = arrowFunction("Ford", 10000, "blue");
// arrowCar.showCar();

// const number1 = function (a) {
//   return a;
// }

// const number = (a, b) => a + b;

// console.log(number1(1), number(1));

// 1. написати стрілочну функцію що повертає результат від ділення більшого з 2 переданих чисел на менше

// if () {}

// 2. написати функцію яка повертає функцію, передаючи до неї всі свої аргументи

// 3. написати функцію, яка приймає 2 строки (string) і повертає їх загальну довжину

// function top (a, b) {

//   // const bottom = function () {

//   // }

//   // return bottom.bind(this, args);
//   return function bottom (a, b) {

//   }
// }

// function a (a) {
//   return function (b) {

//   }
// }

// a()()

// (function main(text) {
//   alert(text);
// })("Hello");

// function Car(name, price, color) {
//   this.name = name;
//   this.price = price;
//   this.color = color;
//   this.showCar = function () {
//     console.log(this);
//   };

//   return this;
// }

// Number.prototype.showNumber = function () {
//   console.log(this, ":)!!!!");
// };

// const a = 10;
// a.showNumber();

// Car.prototype.show2 = function () {
//   console.log(this.name, "name");
// };

// const car1 = new Car("Ford", 500, "green");
// car1.showCar();
// car1.show2();

// function fn (number) {
//   return Math.abs(number);
// }

// console.log(fn(-12), "result");

// callback

// function fn (fn1, str) {
//   return fn1(str);
// }

//  const result = fn((msg) => msg.toUpperCase(), "Hello world");
//  console.log(result, "result");

// [].forEach((e, i, arr) => console.log(e))

// forEach, map, reduce

// function sum(b, a) {
//   return b + a;
// }

// sum(10, 20);

// Array.prototype.forEach2 = function (fn) {
//   for (let i = 0; i < this.length; i = i + 1) {
//     fn(this[i], i, this);
//   }
// };

// const arr = [1, 2, 3, 4, 5];

// arr.forEach((e, i, arr) => console.log(e, i, arr));
// arr.forEach2((e, i, arr) => {
//   console.log(e, i, arr);
// });

// [1,2,3].map((e, i, arr) => e.toString()); ["1", "2", "3"];

// Array.prototype.map2 = function (fn) {
//   const result = [];

//   for (let i = 0; i < this.length; i = i + 1) {
//     const newElement = fn(this[i], i, arr);
//     result.push(newElement);
//   }

//   return { new: result, old: this };
// };

// console.log([1, 2, 3].map2((e, i, arr) => e.toString()));

// reduce
// [1,2,3].reduce((acc, e, i, arr) => acc = acc + e, 0);

// function fn(fn1, fn2) {
//   return fn1(10) + fn2(20);
// }

// fn(
//   (a) => a,
//   (b) => b
// );

// fn(fn1, fn2)

// function sum(fn1, fn2) {
//   return fn1(10) + fn2(20);
// }

// sum((n) => n, (n) => n )


// function sum1 (n1, n2) {
//   console.log(arguments, "arguments");
//   return n1 + n2;
// }

// sum1(10, 15);

// function sum (fn1, fn2) {
//   return fn1(100) + fn2(40);
// }

// console.log(sum((a) => a, (a) => a ), "!!!");

// [1,2,3].reduce((acc, e, i, arr) => acc = acc + e, 0);

// Array.prototype.reduce2 = function (fn, acc) {

//   for (let i = 0; i < this.length; i = i + 1) {
//    acc = fn(acc, this[i], i, this);
//   }

//   return acc;
// };

// console.log([1,2,3].reduce2((acc, e) => acc = acc + e), "result");
// console.log([1,2,3].reduce2((acc, e) => acc = acc.push(e * 10), []), "result");

// function fn (f1, f2) {};
// fn((a) => a, function(a) {return a});

// const fn = function (f1, f2) {
// 	return {
// 			result1: f1(),
// 			result2: f2()
//    }
// }

// const res = fn(() => "res1", () => "res2");

// console.log(res, "res");

// Написати функцію що приймає 2 числа (а та b) і повертає суму довжин цих чисел (переведідь числа у строки та дізнайтеся їх довжину)

function fn (a ,b) {
  return a.toString().length + b.toString().length
}

const res = fn(100, 10);
console.log(res, "res");