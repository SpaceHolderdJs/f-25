//1
// const arr = [1, 6, 8, 21, 56];

// let sum = 0;

// arr.forEach((number) => {
//     sum += number;
// });

// let avarage = sum / arr.length;

// console.log( avarage, "avarage")

//2
// const str = "Hello world random words here";
// console.log(str.split(" ").length, "words");

//3
// const arr2 = [20, 90, 7, 8, 100];

// let max = arr2[0];
// let min = arr2[0];

// console.log(Math.max.apply(null, arr2), "max2");
// console.log(Math.min.apply(null, arr2), "min2");

// arr2.forEach((number) => {
//     if (max < number) {
//         max = number;
//     }

//     if (min > number) {
//         min = number;
//     }
// });

// console.log("max", max);
// console.log("min", min);

//map
//filter
//forEach
//------
//every
//some
//fill
//-----
//reduce
//[[], [], []]

// const arr = [];
// arr.length = 20;

// arr.fill(1);

// console.log(arr, "!!!");

// const arr = [
//   {
//     name: "Igor",
//     age: 23,
//     role: "admin",
//   },
//   {
//     name: "Oleg",
//     age: 23,
//     role: "user",
//   },
//   {
//     name: "Yula",
//     age: 23,
//     role: "user",
//   },
// ];
// console.log(arr, "arr");

// const isAllElementsEqualToOne = arr.every((object) =>
//   ["admin", "user"].includes(object.role)
// );

// const isSomeElements = arr.some((object) => object.name === "Yula" );

// console.log(isAllElementsEqualToOne, "every");
// console.log(isSomeElements, "some");

//2;
// const arr = [5, 10, 15, 20];

// Рішення 1

// console.log(
//   arr.every((e, i, arr) =>
//     i === arr.length - 1
//       ? arr[arr.length - 1] - 5 === arr[arr.length - 2]
//       : arr[i + 1] - e === 5
//   ),
//   "result"
// );

// Рішення 2

// console.log(arr.every((e, i) => ((i + 1) * 5) === e ), "result");

// Reduce

// const arr = [1, 5, 7, 9];

// const sum = arr.reduce((acc, number) => acc += number, 0);
// console.log(sum, "sum");

// const arr = [{age: 10}, {age: 30}, {age: 80}];

// const words = ["React ", "Angular ", "Vue ", "Svelte "];
// ["R", "A", "V", "S"];

// const allFrameWorks = words.reduce((acc, el) => (acc += el), "");

// console.log(allFrameWorks, "!!!");
// console.log(words.join(""), "!!! with join");

// const frameWorksWithoutSpace = words.reduce((acc, framework) => {
//   acc.push(framework.trim());
//   return acc;
// }, []);

// console.log(frameWorksWithoutSpace, "frameworks");

// const arr = [{password: "1245"}, {password: "sasasasa"}, {password: "yuduudu"}, {password: "33"}, {password: "334"}];
// password < 6
//reduce -> [...]
// []

// const arr = [
//   { password: "1245" },
//   { password: "sasasasa" },
//   { password: "yuduudu" },
//   { password: "33" },
//   { password: "334" },
// ];

// const invalidPassword = arr.reduce((acc, { password }) => {
//   password.length < 6 && acc.push(password);
//   return acc;
// }, []);

// console.log(invalidPassword, "invalidPassword");

//3

const arr = [1,2,60,6,3];
