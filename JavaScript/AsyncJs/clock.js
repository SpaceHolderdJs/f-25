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