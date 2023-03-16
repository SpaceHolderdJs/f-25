// Promise

//GET

const postsSection = document.getElementById("posts-section");

function renderPosts(posts) {
  postsSection.innerHTML = "";

  posts.forEach(
    ({ id, body, title }) =>
      (postsSection.innerHTML += `<div>
        <span>${id}</span>
        <h3>${title}</h3>
        <p>${body}</p>
    </div>`)
  );
}

fetch("https://jsonplaceholder.typicode.com/posts")
  .then((response) => response.json())
  .then((data) => {
    renderPosts(data);
    // data.forEach((post) => console.log(post));
  })
  .catch((err) => console.log("hello", err))
  .finally(() => {
    console.log("We are done request");
  });


//   const promise = new Promise((resolve, reject) => {
//      console.log("Hello, I am promise");
//      resolve({NAME: "Igor"});


//   })
//   .then((obj) => console.log("Then", obj))
//   .then(() => console.log("Then2"))
//   .catch((obj) => console.log("Opps, Error", obj))

//   promise();

// setTimeout(() => {
//     console.log("Delayed hello");
// }, 5000)

let counter = 0;

new Promise((res, rej) => {
   const interval = setInterval(() => {
        counter++;
        console.log(counter, "counter");

        if (counter > 5) {
            clearInterval(interval);
            res();
        }
    }, 1000);
}).then((msg) => {
    console.log("Finally we are done", counter);
});

const circle = document.getElementById("circle");
circle.style.left = 0;

// Написати функцію, що приймає строку виду 10px і повертає її числове значення як number

// const parseStringIntoNumber = (str) => {
//     const arrayFromString = str.split("");
//     let result = "";

//     for (let symbol of arrayFromString) {
//         if (!isNaN(+symbol)) {
//             console.log("Is number", symbol);
//             result += symbol;
//         }
//     }

//     return +result;
// }

// const circleInterval = setInterval(() => {
//     circle.style.left = parseStringIntoNumber(circle.style.left) + 5 + "px";
//     circle.style.top = parseStringIntoNumber(circle.style.top) + 5 + "px";
// }, 100);
