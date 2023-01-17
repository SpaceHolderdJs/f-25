console.log("!!!");
console.warn("Slow connection");
console.error("Error");

const obj = {
  a: 10,
  b: 100,
  c: 1000,
};

console.table(obj);

console.group("");
console.log(1);
console.log(2);
console.log(3);
console.groupEnd("");

console.time();
console.log(1);
console.log(2);
console.log(3);
console.timeEnd();
