
// const obj2 = new Object({});

// const user = {
//     name: "Igor",
//     age: 23,
//     obj: {
//         key: "value"
//     },
// };

// user.newProp = "NEW";
// user.obj.secondKey = 2;


// for (let i = 0; i < Object.keys(user).length; i = i + 1 ) {
//     const keys = Object.keys(user);
//     const values = Object.values(user);

//     console.log(`${keys[i]}: ${values[i]}`);
// }

// console.log('before', user);

// delete user.age;

// console.log('after', user);


// const name = "Igor";
// const age = 23;
// const city = "Kyiv";

// const data = {
//     name,
//     age,
//     city
// };

// console.log(data);

// data.name = name;
// data.age = age;
// data.city = city;

// const str = "ABCDEFG";
// const alphObj = {};

// for (let i = 0; i < str.length; i ++) {
//     alphObj[str[i]] = str[i];
// }

// console.log(alphObj);


// for (let key in user) {
//     delete user[key];
// }

// const data1 = {
//     name: "Igor",
//     age: 23,
//     city: "Kyiv"
// }

// const obj =  {
//     country: "Ukraine",
//     age: 100
// }

// const data2 = { ...obj, ...data1 };

// for (let key in data1) {
//     data2[key] = data1[key];
// }

// data1.name = "Oleg";
// console.log(data1, "data1");

// console.log(data2, "data2");

// let pr1 = 100;
// let pr2 = pr1;
// pr1 = 50;
// console.log(pr2);

const data1 = {
    name: "Igor"
};

const data2 = {

};

data2[data1.name] = Object.keys(data1)[0];

console.log(data2, "data2");

