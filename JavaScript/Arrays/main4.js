// const arr2 = [{ city: "lviv" }, { city: "Kyiv" }, { city: "dnipro" }];

// console.log(
//   arr2.every((object) => object.city[0] === object.city[0].toUpperCase()),
//   "result"
// );

// 7 - looking for

// const arr = [
//   [1, 2],
//   [3, 4],
//   [5, 6],
//   [7, 8],
// ];

// let sum = 0;

// arr.forEach((arrayElement) => {
//     // console.log(arrayElement, "element");
//     arrayElement.forEach((number) => {
//         // console.log(number, "number");
//         sum = sum + number;
//     });
// });

// console.log(sum, "sum");

// const res = arr.find((arrayElement) => arrayElement.includes(7));
// console.log(Boolean(res), "result", res);

// const res2 = arr.some((arrayElement) => arrayElement.includes(7));
// console.log(res2, "result2");

// Calculate sum of all array elements

// const sum = arr.reduce((acc, arrayElement) => {
//     arrayElement.forEach((number) => acc += number );
//     return acc;
// } , 0);

// console.log(sum, "sum");

// const arr2 = [
//   [
//     [1, "A"],
//     [2, "B"],
//     [3, "C"],
//   ],
//   [
//     [4, "D"],
//     [5, "E"],
//     [6, "F"],
//   ],
//   [
//     [7, "C"],
//     [8, "T"],
//     [9, "A"],
//   ],
//   [
//     [10, "P"],
//     [11, "L"],
//     [12, "M"],
//   ],
// ];

// console.log(arr.flat(), "flat");
// console.log(
//   arr.flat().reduce((acc, number) => (acc += number), 0),
//   "sum"
// );

// const user = { name: "Igor", age: 23 };
// const newUser = { ...user }; //-spred

// user.age = 100;

// console.log(newUser, "newUser");

// const arr3 = [...arr.flat(), ...arr2.flat()];
// console.log(arr3, "arr3");

// //reverse
// const arr4 = [1, 2, 3, 4, 5];
// arr4.reverse();
// console.log(arr4, "reverse");

// const arr = ["Alex", "Igor", "Oleg", "Vika"];
// const obj = { name: "Oleg", age: 20 };

// const { name, age } = obj;
// console.log(name, age, "name and age");

// const [name1, name2, name3, name4] = arr;
// console.log(name1, name2, name3, name4, "names");

// const arr = [["1", "5", "7"], ["6", "9", "3"]];
// [[1,5,7], [6,9,3]];

// const res = arr.map((arrElement) => {
//     return arrElement.map((element) => +element);
// });

// const res = arr.forEach((arrElement, i) => {
//     arr[i] = arrElement.map((element) => +element);
// });

// console.log(arr, "res");

// const obj = {};
// console.log(Object.keys(obj).length);

// console.log(Array.isArray(1));

// const arr = [1, 6, 9, "Text", [1, 9], [], {}, () => {}];

//1 Check if arr has arrays inside
//2 Check if arr has filled arrays

// console.log(
//   arr.some((el) => {
//     return Array.isArray(el);
//   }),
//   "res"
// );

const arr = [2, 5, 9, 10, 0, 6, 1, 10000000];
// const arr1 = ["b", "a", "c"];

// console.log(
//   arr1.sort((e1, e2) => {
//     if (e1 > e2) return -1;
//     if (e2 > e1) return 1;
//     else {
//       return 0;
//     }
//   }), // 1 -1 0
//   arr1,
//   "sorting arr"
// );

// const arr1 = [1, 4, 6, 8, 2, 9];

// console.log(
//   arr1.sort((e1, e2) => ),
//   "sorting arr1"
// );
