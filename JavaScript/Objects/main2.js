// const name = "Alex";

// const person = {
//   personName: "Alex",
//   age: 10,
//   email: "email@gmai.com",
// };

// const person1 = {
//   name: "Oleg",
// };

// // person.name
// // person.age
// // person.email

// const { personName, age, email } = person;
// console.log(personName, age, email, person);

// Object.freeze(person);

// delete person.age;

// person.city = "Kyiv";
// console.log(person, person.city);

// console.log(Object.isFrozen(person));

// const object = {
//   person1: {
//     name: "Igor",
//     age: 20,
//   },
//   person2: {
//     name: "Oleg",
//     age: 50,
//   },
//   person3: {
//     name: "Alex",
//     age: 40,
//   },
// };

// // 1. Залишити лише людей з віком < 50 р
// // 2. Заморозити людей що залишилися

// for (let key in object) {
//   if (object[key].age < 50) {
//     Object.freeze(object[key]);
//   } else {
//     delete object[key];
//   }
// }

// console.log(object.person1.age, "!!!");

// console.log(object, "final object");

// const database = {};

// const data = {
//   game1: {
//     isFinished: true,
//     score: 100,
//   },
//   game2: {
//     isFinished: false,
//     score: 500,
//   },
//   game3: {
//     isFinished: false,
//     score: 10,
//   },
//   game4: {
//     isFinished: true,
//     score: 10,
//   },
//   game5: {
//     isFinished: true,
//     score: 200,
//   },
// };

// 1. Заповнити БД іграми, які вже закінчилися та іграми які мають score >= 100;

// for (let key in data) {
//   if (data[key].isFinished && data[key].score >= 100) {
//     database[key] = data[key];
//   }
// }
// console.log(database, "database");

// let name = "Oleg";

// name.length;

// const obj = {
//     name: "Igor",
//     age: 40
// }


// obj.newField = "2";

// for (let key in obj) {
//     console.log(key, obj[key]);
// }

// console.log(obj, "obj");

// console.log(Object.keys(obj).length)

// console.log(window);

// const obj = {
//     name: "Igor"
// };

// const obj2 = {
//     age: 15
// };

// const obj3 = {
//     age: 100,
//     city: "Kyiv"
// };

// {name: "Igor", age: 15, city: "Kyiv" };

// const data = {
//   0: { name: "Oleg", age: 35 },
//   1: { name: "Alex", age: 40 },
//   2: { name: "Olena", age: 20 },
// };

// const sortedData = {};

// for (let key in data) {
//   if (data[key].age) {
//   }
// }

// for (let i = 0; i < Object.keys(data).length; i = i + 1) {
//   // sortedData[i] = data[i];
//   const currentPersonAge = data[i].age;
//   if (sortedData[i] && (sortedData[i].age > currentPersonAge)) {
//     let tmp = sortedData[i];
//     sortedData[i] = data[i];
    
//   }
// }

// console.log(sortedData, "sortedData");

// const salaryDetector = (salary) => salary > 1000; 

// Object.defineProperty(obj, "newField", {
//     value: "1",
//     writable: salaryDetector(999),
//     enumerable: false
// });