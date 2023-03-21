// console.log(1);

// setTimeout(() => {
//     console.log(2);
// }, 0);

// new Promise((res, rej) => {
//     console.log(10);
//     res(2);
// })
// .then((n) => console.log(n))

// console.log(3);

// Promise.all()

// function fillPromises (n) {
//     const promises = [];

//     for(let i = 0; i < n; i++) {
//         const promise = new Promise((resolve, reject) => {
//             const timeOfExecution = (i + 1) * 1000;
//             console.log(timeOfExecution);
//             setTimeout(() => {
//                 resolve(timeOfExecution);
//             }, timeOfExecution)
//         });

//         promises.push(promise);
//     }

//     return promises;
// }

// Promise.all(fillPromises(3))
// .then(() => console.log("We are done!!!"))
// .catch(() => console.log("Error"))

// Promise.race(fillPromises(4))
// .then((timeOfExecution) => console.log(`Time:`, timeOfExecution))

// 1.  Змінити логіку функціх так, щоб час виконання промісу залежав від номеру ітерації вашого циклу

// LocalStorage
// Session Storage

// JSON => string

// localStorage.setItem("msg", "hello");
// localStorage.setItem("number", 1);
// localStorage.setItem("boolean", true);

// const user = {name: "Oleg"};

// console.log(JSON.stringify(user), "user");

// localStorage.setItem("array", JSON.stringify([1,2,3,4,5,6]));
// localStorage.setItem("user", JSON.stringify(user));
// localStorage.setItem("bigData", JSON.stringify({name: "Igor", array: [1,2,3,4]}));

// const msg = localStorage.getItem("msg");
// const boolean = localStorage.getItem("boolean");

// const userData = JSON.parse(localStorage.getItem("user"));
// const array = JSON.parse(localStorage.getItem("array"));
// const bigData = JSON.parse(localStorage.getItem("bigData"));

// console.log(bigData, "data from LS");

const users = localStorage.getItem("users")
  ? JSON.parse(localStorage.getItem("users"))
  : [];

if (users.length === 0) {
  fetch("https://jsonplaceholder.typicode.com/users")
    .then((response) => response.json())
    .then((users) => {
      console.log(users, "users from server");
      localStorage.setItem("users", JSON.stringify(users));
    });
} else {
    console.log(users, "users from LS");
}



const emailField = document.querySelector("#email");
const passwordField = document.querySelector("#password");
const submitBtn = document.querySelector("#submit");

const userEmailOutput = document.querySelector("#user-email"); 
const userPasswordOutput = document.querySelector("#user-password"); 

let user = localStorage.getItem("user")
? JSON.parse(localStorage.getItem("user"))
: undefined;

if (user) {
    const {email, password} = user;
    userEmailOutput.textContent = email;
    userPasswordOutput.textContent = password;
}


submitBtn.onclick = () => {
    const email =  emailField.value;
    const password = passwordField.value;

    user = {email, password};

    userEmailOutput.textContent = email;
    userPasswordOutput.textContent = password;

    emailField.value = "";
    passwordField.value = "";

    localStorage.setItem("user", JSON.stringify(user));
}

