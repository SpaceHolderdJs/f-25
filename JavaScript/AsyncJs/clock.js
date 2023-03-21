const clock = document.querySelector("#clock");
const addButton = document.getElementById("add");
const decreseButton = document.getElementById("decrease");

let couter = 5;

const interval = setInterval(() => {
    couter--;
    clock.textContent = couter;

    if (couter < 0) {
        clock.textContent = "Time is over"
        clearInterval(interval);
    }
}, 1000);

// Додати функціонал до кнопок, які збільшують та зменшують counter на 5 секунд відповідно

addButton.onclick = () => {
    couter += 5;
}

decreseButton.onclick = () => {
    couter -= 5;
}

// Додати кнопку що моментально анулює роботу таймеру


//HW

const data = [
	{
		"name": "Abraham Marsh",
		"phone": "1-843-901-9977",
		"email": "morbi@google.org"
	},
	{
		"name": "Isabella Mcgowan",
		"phone": "1-874-933-8532",
		"email": "ac.feugiat@protonmail.couk"
	},
	{
		"name": "Leandra Levy",
		"phone": "(482) 150-2683",
		"email": "vitae.dolor@hotmail.couk"
	},
	{
		"name": "Shana Byrd",
		"phone": "1-134-348-2696",
		"email": "sit.amet@hotmail.edu"
	},
	{
		"name": "Victoria Vazquez",
		"phone": "(676) 677-3028",
		"email": "mauris.magna@yahoo.ca"
	}
];

// new Promise((res, rej) => {
//     setTimeout(function () {
//         res(data);
//     }, 5000);
// }).then((data) => {
//     console.log("Data", data);
// });

console.log(1);

setTimeout(() => {
    console.log(2);
}, 0);

console.log(3);



// Event Loop