const fn = () => {
  let count = 0;
  console.log("hello");
  return (b) => {
    count = count + b;
    console.log(count, b);
    return count;
  };
};

// function fn2() {
//   //complicated things
//   console.log("!!!");
// }

// console.log(fn()(100));
// console.log(fn()(0));
// console.log(fn()(1000));

console.log(fn());
const result = fn();

result(10);
