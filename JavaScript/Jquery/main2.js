window.addEventListener("load", () => {
  const colors = ["red", "black", "lime", "brown"];

  $("#color").on("input", function () {
    $("body").css({ background: this.value });
  });

  colors.forEach((color) => {
    $("#main2-section").append(`<button>${color}</button>`);
  });

  [...$("#main2-section > button")].forEach((button) => {
    console.log(button.textContent, $(button).text(), "!!!");
    $(button).click(() => {
      $("body").css({ background: $(button).text() });
    });
  });

  // написати логіку по синхронізації інпутів (Juery)

  $("#inp-1").on("input", function () {
    $("#inp-2").val($(this).val());
  });

  // створити 5 інпутів динамічно (text)
  // дати їм [change] відповідно так щоб кожен наступний інпут відставав
  // на 1 літеру від попереднього

  // написати логіку що обнуляє значення інпутів (обох) на натискання на кнопку Submit
});

let scene = null;

class A {
  constructor() {
    return () => {
      return !scene ? new Scene({ name: "Igor" }) : scene;
    };
  }
}
