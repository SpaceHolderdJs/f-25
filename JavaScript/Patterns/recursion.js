// recursion

//calculation of numbers
function calculation(n, step) {
  for (let i = 0; i < step; i++) {
    n = n * n;
  }

  return n;
}

const res = calculation(10, 3);
console.log(res, "res");

function calculationRecursion(n, step) {
  console.log(step, n, "!!!");
  //stop criteria
  if (step === 0) {
    return n;
  }
  return calculationRecursion(n * n, step - 1);
}

const res2 = calculationRecursion(10, 3);
console.log(res2, "res2");

//data manipulation
const data = {
  a: 1,
  b: 2,
  c: { a: 11, b: 22, c: { a: 111, b: 222 } },
};

function datalogger (data) {
    for (let key in data) {
        if (typeof data[key] === "object") {
          return datalogger(data[key]);
        }
        console.log(data[key]);
    }
}

datalogger(data);