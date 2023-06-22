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
};

const getUsers = async () => {
  const result = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await result.json();

  console.log(data);
  return data;
};

// getTodos().then((data) => {
//     console.log("todos", data);
// });

// getUsers().then((data) => {
//     console.log("users", data);
// });

Promise.race([getTodos(), getUsers()]).then(() => {
  console.log("DONE");
});

// async function main2 () {}
// const main3 = async function () {}
// const main4 = async () => {}

//1.
// Створіть совою асинхронну функцію, що опрацьовує Promise і повертає результат його роботи

// fetch('https://jsonplaceholder.typicode.com/todos/1')
//       .then(response => response.json())
//       .then(json => console.log(json))

const getData = async () => {
  const jsonData = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = await jsonData.json();
  console.log(data, "DATA!!!");
  return data;
};

getData();

const createPost = (post) => {
  return fetch("https://jsonplaceholder.typicode.com/posts", {
    method: "POST",
    body: JSON.stringify(post),
  })
    .then((response) => response.json())
    .then((data) => {
      console.log(data, "new data response");
      return data;
    })
    .catch((err) => console.log(err));
};

const updatePost = (post) => {
  return fetch("https://jsonplaceholder.typicode.com/posts/7", {
    method: "PATCH",
    body: JSON.stringify(post),
  })
    .then((response) => response.json())
    .then((data) => {
      console.log("DATA after PATCH", data);
      return data;
    });
};

const deletePost = (postId) => {
  return fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`, {
    method: "DELETE",
  })
    .then((response) => response.status)
    .then((data) => console.log("DELETED DATA", data));
};

createPost({ title: "title", body: "text", userId: 0 }).then((data) =>
  console.log("I have data from innered then", data)
);

updatePost({ title: "title", body: "text", userId: 1, id: 7 });

deletePost(1);

//Requests -> Response

// 1. GET    server --> client
// 2. POST   client --> server - створення нових сутностей
// 3. PATCH/PUT   client --> server - оновлення існуючих сутностей
// 4. DELETE client --> server видалення сутності
