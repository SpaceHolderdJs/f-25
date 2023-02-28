// // const arr = ["1", "2", "4", "7"];
// // const res = [];

// // // Очікуваний результат
// // // [1, 2, 4, 7];

// // arr.forEach((e, i) => {
// //   res[i] = +e;
// // });

// // console.log(res, "res");

// // const arr1 = ["Poland", "Ukraine", "USA"];

// // arr1.forEach((e, i) =>{
// //     arr1[i] = e[0];
// // });

// // console.log(arr1, "arr1");

// // const arr2 = ["Lviv", "Kyiv", "Poltava"];
// // console.log(arr2.indexOf("Kyiv"), "index");

// // sort!

// const arr = [1, 5, 17, 4, 8, 6, 7, 0];
// const arr2 = ["bananna", "animal", "flower"];

// const arr3 = [
//   { name: "Yarik", age: 93 },
//   { name: "Igor", age: 73 },
//   { name: "Oleg", age: 43 },
//   { name: "Olena", age: 23 },
// ];

// console.log(
//   arr.sort((e1, e2) => e1 - e2),
//   "Sorting numbers",
//   arr
// );
// console.log(
//   arr2.sort((e1, e2) => e1.localeCompare(e2)),
//   "Sorting strings"
// );

// console.log(
//   arr3.sort((obj1, obj2) => obj1.age - obj2.age),
//   "Sorting objects"
// );

// console.log("1".localeCompare("2"), "localeCompare"); //-1, 1, 0


// const arr = [1,2,3,4,5];

// console.log(arr.at(1000), arr[0], "element");



class SuperArray extends Array {
  constructor (arr) {
    super(arr);
  }

  at() {
      return {
        element: this[0][this[0].length - 1],
        array: this[0]
      }
  }
}

const array = new SuperArray([1,2,3,4]);

console.log(array.at(0), "at");

const fn = (a, b) => a.toString().length + b.toString().length;

console.log(fn(100, 1));