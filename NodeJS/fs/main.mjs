import { user, logUser } from "./utils.mjs";
import fs from "fs";
// import data from "./data.json" assert { type: "json" };

const data = JSON.parse(fs.readFileSync("./data.json"));

//DZ
function changeUser(newUserData, i) {}

console.log(data, "data");

function main(a, b) {
  return a + b;
}

console.log(main(10, 15));
