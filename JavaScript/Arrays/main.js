// {}
// []

// const arr = [1, 10, "hello", true, null, undefined, [], {}, function () {}];
// console.log(arr[0], arr[1], arr[2], arr.length);

// // const arr2 = new Array([]);

// const names = ["Igor", "Oleg", "Alex"];
// const ages = [23, 20, 34];

// names[names.length] = "Olena";

// console.log(names, names.slice(0, 2));
// console.log(names.concat(["Vitaliy", "Vika"]));
// console.log(names.includes("Oleg2"), "includes");
// console.log(names.indexOf("Alex2"), "index");

// console.log(names, names.length);

// console.log(names[0], ages[0]);

const names = ["Igor", "Oleg", "Alex"];

//shift - вирізати 1 елемент з початку масиву
//pop - вирізати 1 елемент з кінця масиву
//push - додати у кінець
//unshift - додати на початок

names[names.length] = "Yula";
names.push("Vika");
const igor = names.shift();

console.log(igor, names);

names.unshift("Sasha");

const vika = names.pop();
console.log(vika);
console.log(names);

// завдання 1
const arr = ["Igor", "Oleg", "Alex"]; //[ "Alex", "Igor", "Oleg" ];

// завдання 2
const arr2 = ["Kyiv", "Lviv", "Odessa"];
//arr[...]

// завдання 3
// for(let i = 0; i < arr.length; i++ ) {
//  ...
// }

// for (let el of arr3) {
//     console.log(el);
// }

// callBack

const arr3 = ["Ford", "Mazda", "Lincoln", "Pontiac", "Lexus"];

// arr3.forEach(function (el, i, arr) {
//     console.log("Hello", el, i, arr);
// });

arr3.forEach((el) => {
  if (el.includes("L")) {
    console.log(el);
  }
});

// Завдання 4

const arr4 = [10, 30, 2, 5, 9];
let sum = 0;

for (let el of arr4) {
  console.log(el, "el");
}

// Завдання 5

const arr5 = [
  { name: "Igor", age: 40 },
  { name: "Oleg", age: 34 },
  { name: "Misha", age: 10 },
];

//age > 10

const result = [];
