// new Promise((res) => {
//     res("hello")
// })
// .then(() => {});

//async await


const getTodos = async () => {

    // const response = await new Promise((res) => {
    //     res("Hello");
       
    // });

    // console.log(response)

   const result = await fetch("https://jsonplaceholder.typicode.com/todos");
   const data = await result.json();
   
   console.log(data);
   return data;

}

const getUsers = async () => {
    const result = await fetch("https://jsonplaceholder.typicode.com/users");
    const data =  await result.json();

    console.log(data);
    return data;
}

// getTodos().then((data) => {
//     console.log("todos", data);
// });

// getUsers().then((data) => {
//     console.log("users", data);
// });

Promise.race([getTodos(), getUsers()]).then(() => {console.log("DONE")});

// async function main2 () {}
// const main3 = async function () {}
// const main4 = async () => {}


//1. 
// Створіть совою асинхронну функцію, що опрацьовує Promise і повертає результат його роботи
