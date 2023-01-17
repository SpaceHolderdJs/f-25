// boolean true / false

// const a = "Igor2";
// const b = "Alex";
// const c = "Helen";

// || - or

// if (a === "Igor" || b === "Alex" || c === "Helen") {
//   console.log("TRUE");
// }

// && - and

// if (a === "Igor2" && b === "Alex") {
//   console.log("TRUE2");
// }

// !
// !==

// console.log(!!false);

// if (!!false) {
//   console.log("TRUE3");
// }

//

// const equality =
//   a === "Igor22" || b === "Alex22" || c === "Helen22"
//     ? console.log("")
//     : console.log("");
// console.log(equality);

// 1

// const a = 10;
// const b = 15;

// Greater
// Lower
// Equal

// const value1 = prompt("Enter number"); //abc < 10 (length)
// const value2 = prompt("Enter number"); //cbd < 10 (length)

// ("script");

// alert();

// const name1 = "Igor";

// switch (name1) {
//   case "Some Name":
//   case "Misha":
//   case "Igor":
//     console.log("Name is Igor or Oleg");
//     console.log("Hello");
//     break;
//   default:
//     console.log("Unknown name");
// }

// Запросіть у користувача 10 чисел і підрахуйте,
// скільки він ввів додатних чисел, від’ємних та нулів.
// При цьому підра- хуйте також кількість парних і непарних чисел.
// Виведіть статистику на екран.
// Враховуйте те, що достатньо однієї змінної (не 10) для введення чисел користувачем.

// const numbers = prompt("Enter 5 numbers");

// const analyzer = (numbers) => {
//   const numbersArray = numbers.split(" ").map((el) => +el);

//   const statics = {
//     "+": numbersArray.filter((el) => el > 0),
//     "-": numbersArray.filter((el) => el < 0),
//     0: numbersArray.filter((el) => el === 0),
//     "парні": numbersArray.filter((el) => el % 2 === 0),
//     "непарні": numbersArray.filter((el) => el % 2 !== 0),
//   };

//   console.table(statics);
//   return statics;
// };

// analyzer(numbers);

// const userName = prompt("Enter name"); // null undefined "" false 0

// const gender =
//   userName === "Igor" || userName === "Oleg"
//     ? "M"
//     : userName === "Olena" || userName === "Nastya"
//     ? "F"
//     : "Not recognized";

// const userName = prompt("Enter name");

// const gender = userName || "" || false || "Default";

// alert(gender);

// alert(gender);

// const resultName = userName || "We are finally here" 

// alert(resultName);

// ==
// ===

// console.log(null == undefined);
// console.log(null === undefined);

// console.log(null == 0);
// console.log(null === 0);
// console.log(null > 0);
// console.log(null < 0);
// console.log(null >= 0);
// console.log(null <= 0);
// console.log(null !== 0);


// const number = +prompt("Enter number") || 0;

const n1 = prompt("Enter number1");
const n2 = prompt("Enter number2");

let res;