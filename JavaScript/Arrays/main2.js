const arr = ["1", "2", "4", "7"];
const res = [];

// Очікуваний результат
[1, 2, 4, 7];

arr.forEach((e) => {
  res.push(+e);
});

console.log(res);

// NaN - not a number
console.log(1 + undefined, "nan");
console.log(isNaN(1 + undefined));

const arr1 = [300, 100, 500, NaN, 800, NaN];
// const res1 = [];

// console.log(isNaN(1 * undefined), "isNan");

// for (let el of arr1) {
//     if (!isNaN(NaN)) {
//         res1.push(el);
//     }
// }

arr1.forEach((el, i, arr) => {
  console.log(!isNaN(el));
});

console.log(
  arr1.filter((el, i, arr) => true), //boolean;
  "!!!!"
);

// Task1
const arr2 = ["A", "B", "c", "D", "Y", "o"]; //filter;
let res2 = arr2.filter((el) => el === el.toLowerCase());

console.log(res2, "res2");

console.log(Infinity + Infinity);

// for (let i = 0; i < Infinity; i++) {
//     console.log("Log", i);
// }

// Task2
const arr3 = [1, 80, 1, 4, 5, 7, 5];
console.log(
  arr3.filter((el, i, arr) => arr.indexOf(el) === i),
  "result"
);

// Task3
const arr4 = [10, 60, 80, 40, 80, 70]; // i % 2 парні індекси
//forEach

const str = "Hello world";
console.log(str.split(" "), "split"); // строка -> масив

const arr5 = ["Hello", "world", "q", "aaa"];
console.log(arr5.join("_"), "join"); // масив -> строка

// Task 5
const arr6 = ["Hello", "world", "how", "are", "you"];
("Hello.world.how.are.you");

const arr7 = ["1", "2", "4", "7"];
const res7 = [];

// Очікуваний результат
[1, 2, 4, 7];

console.log(
  arr7.map((el) => +el),
  "map"
);

const users = [
  { name: "Igor", password: "password", location: "Kyiv" },
  { name: "Oleg", password: "password", location: "Kyiv" },
  { name: "Alex", password: "password", location: "Kyiv" },
  { name: "Maryna", password: "password", location: "Kyiv" },
];

const cleanUsers = users.map((user) => {
  delete user.password;
  return user;
});

console.log(cleanUsers, "users");

const userWithAges = users.map((user) => {
  user.age = Math.floor(Math.random() * 100);
  return user;
});

const usersAges = users.map(({ age }) => ({ age }));

console.log(userWithAges, "AGES");

console.log(usersAges, "!!!!");

// 1.1 Порахувати сумму віку всіх юзерів

// 1.2 Повернути масив з віком кожного з користувачів [100, 30, 20, 50]

// document.querySelector("#out").innerHTML = ;

// map(({name}) => `<div>${name}</div>`);



