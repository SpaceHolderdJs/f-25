class Entity {
  constructor(e) {
    this.e = e;
  }

  method1() {
    this.e = `1`;
    console.log(`Method1`, this.e);
    return this;
  }

  method2() {
    this.e = `2`;
    this[2] = `2`;
    console.log(`Method2`, this.e);
    return this;
  }

  method3() {
    this.e = `3`;
    console.log(`Method3`, this.e);
    return this;
  }
}

const e = new Entity("e");
const result = e.method1().method1().method2().method3().method2();

console.log(result, "result");

class SuperArray extends Array {
  constructor(...args) {
    super(...args);
    this.args = args;
  }

  reduce(callback) {
    const result = new Array(this.args).reduce(callback);

    return {
      result,
      this: arr,
    };
  }
}

const superArray = new SuperArray(1, 2, 3);

// superArray.map().reduce().this.forEach().map();

class CustomElement {
  //
  constructor(tag, parent = document.body) {
    this.tag = tag;
    this.parent = parent;
    this.element = document.createElement(tag);
    this.element.style.transition = "0.3s";

    parent.appendChild(this.element);
  }

  changeColor(color, delay = 0) {
    this.color = color;
    if (!delay) {
      this.element.style.background = color;
      return this;
    }

    setTimeout(() => {
      this.element.style.background = color;
    }, delay);

    return this;
  }

  changeText(text) {
    this.text = text;
    this.element.textContent = text;
    return this;
  }

  changeSize(w, h) {
    this.sizes = { w, h };
    this.element.style.width = w;
    this.element.style.height = h;
    return this;
  }

  changeTagName(tagName) {
    this.parent.removeChild(this.element);
    this.element = document.createElement(tagName);
    this.parent.appendChild(this.element);

    this.element.style.transition = "0.3s";

    this.element.style.width = this.sizes.w;
    this.element.style.height = this.sizes.h;
    this.element.textContent = this.text;
    this.element.style.background = this.color;

    return this;
  }
}

// Реалізувати метод changeTagName що замінить тип тегу елементу на переданий аргумент
// element.changeTagName("button")
// document.removeChild();

const customElement = new CustomElement("div");
const result2 = customElement
  .changeColor("blue")
  .changeColor("red", 2000)
  .changeText("Hello World")
  .changeSize("200px", "200px")
  .changeTagName("button")
  .changeColor("lime", 4000);

const customElement2 = new CustomElement("table")
  .changeSize("400px", "400px")
  .changeColor("red")
  .changeColor("purple", 5000);
