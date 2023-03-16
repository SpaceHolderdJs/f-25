// Promise

//GET

console.log(1);

fetch("https://jsonplaceholder.typicode.com/posts")
.then((response) => response.json())
.then((data) => console.log("hello", data))
.catch((err) => console.log("hello", err))
.finally(() => {
    console.log("We are done request");
});


console.log(2);
