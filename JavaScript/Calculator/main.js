const input = document.getElementById("input");
const calculateButton = document.getElementById("calculate");

const calculationButtons = Array.from(document.getElementsByClassName("calculations"));
const clearButton = document.getElementById("clear");

calculationButtons.forEach((el) => {
  el.onclick = function () {
    input.value = input.value + el.textContent;
  };
});

const numberButtons = Array.from(document.getElementsByClassName("number"));

numberButtons.forEach((el) => {
    el.onclick = function () {
      input.value = input.value + (+el.textContent);
    };
  });

calculateButton.onclick = function () {
    input.value = eval(input.value);
}

clearButton.onclick = function () {
  input.value = "";
}

const modal = document.querySelector('.modal');
const modalButton = document.getElementById('modal-close-button');
const modalOpenButton = document.getElementById('modal-open-button');

modalButton.onclick = function () {
  modal.style.visibility = "hidden";
}

modalOpenButton.onclick = function () {
  modal.style.visibility = "visible";
}