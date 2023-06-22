import { UserModel } from "./model.mjs";

// exports examples
// export const a = 10;
// export function main() {}
// export const arrow = () => {};
// export const obj = {};
// export let a1 = 10; //

export class UserController extends UserModel {
  constructor(name, age, city) {
    super(name, age, city);
  }

  showInfo() {
    console.log("I am user", this);
  }
}
