const input = document.getElementById("input");
const calculateButton = document.getElementById("calculate");

const calculationButtons = Array.from(document.getElementsByClassName("calculations"));

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