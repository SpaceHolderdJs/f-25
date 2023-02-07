const arr2 = [{ city: "lviv" }, { city: "Kyiv" }, { city: "dnipro" }];

console.log(
  arr2.every((object) => object.city[0] === object.city[0].toUpperCase()),
  "result"
);
