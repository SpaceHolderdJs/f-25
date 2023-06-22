window.addEventListener("load", () => {
  // Якщо firstName та lastName мають довжину < 3 символів - виводиться алерт

  const checks = {
    name: (name) => name.length >= 3,
    secondName: (secondName) => secondName.length >= 3,
    email: (email) =>
      email.length >= 6 && email.includes(".") && email.includes("@"),
    password: (password) =>
      password.length >= 10 &&
      password.split("").some((e) => Number.isInteger(+e)),
  };

  const errors = {
    name: "Name is invalid",
    secondName: "Second Name is invalid",
    email: "Email is invalid",
    password: "Password is bad",
  };

  $("button").click((event) => {
    event.preventDefault();

    [...$("input")].forEach((e, index) => {
      console.log($(e).val());
      !Object.values(checks)[index]($(e).val()) &&
        alert(Object.values(errors)[index]);

      //   $(e).val("");
    });

    [...$("input")].forEach((e) => $(e).val(""));
  });

  console.log(Object.values({ name: "Igor", age: 12, fn: () => "" }), "!!!!");
});

// $("form").on("submit", (event) => {
//   event.preventDefault();
// });

// ==========

// class CL {
//     static A () {}

//     a () {}
// }

// new CL().a() // method
// CL.A() // static method/function

// alert()
