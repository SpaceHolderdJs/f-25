// class A {
//     constructor(a) {
//         this.a = a;
//     }
// }

// class B {
//     constructor(b) {
//         this.b = b;
//     }
// }

// class C {
//     constructor(c) {
//         this.c = c;
//     }
// }

// class NotDefinedEntity {
//     constructor () {}
// }

// class Factory {
//     constructor (data) {
//         //Basic cases
//         // if (type === "A") {
//         //     return new A(data);
//         // }

//         // if (type === "B") {
//         //     return new B(data);
//         // }

//         // if (type === "C") {
//         //     return new C(data);
//         // }

//         if (data.a) {
//             return new A(data.a);
//         }

//         if (data.b) {
//             return new B(data.b);
//         }

//         if (data.c) {
//             return new C(data.c);
//         }

//         return new NotDefinedEntity();
//     }
// }

// const a = new Factory({a: "a"});
// const b = new Factory({b: "b"});
// const c = new Factory({c: "c"});
// const undefinedEntity = new Factory({d: "d"});

// console.log(a, "a");
// console.log(b, "b");
// console.log(c, "c");
// console.log(undefinedEntity, "undefinedEntity");
// console.log(undefinedEntity instanceof NotDefinedEntity, "isNotDefined");

class Square {
  constructor(data) {
    const { size, color } = data;
    this.color = color;
    this.size = size;

    this.element = document.createElement("div");
    this.element.style.background = color;
    this.element.style.width = this.element.style.height = size + "px";
    this.element.style.margin = "20px";

    return document.body.appendChild(this.element);
  }
}

class Circle {
  constructor({ color, size, border }) {
    this.color = color;
    this.size = size;

    this.element = document.createElement("div");
    this.element.style.backgroundColor = color;
    this.element.style.width = this.element.style.height = size + "px";
    this.element.style.borderRadius = "50%";
    this.element.style.border = border;
    this.element.style.margin = "20px";

    document.body.appendChild(this.element);
  }
}

class SuperCircle extends Circle {
  constructor(data) {
    super(data);
    this.element.style.backgroundImage = `url("${data.img}")`;
    document.body.appendChild(this.element);
  }
}

class Factory {
  static cases = {
    Circle,
    SuperCircle,
    Square,
  };

  constructor(data) {
    return new Factory.cases[
      (data.img && SuperCircle.name) ||
        (data.border && Circle.name) ||
        Square.name
    ](data);
  }
}

new Factory({ color: "black", size: 100 });
new Factory({ color: "aqua", size: 75 });
new Factory({ color: "brown", size: 100, border: "1px solid black" });
new Factory({ color: "lime", size: 150, border: "1px solid black" });
new Factory({
  color: "lime",
  size: 250,
  border: "1px solid black",
  img: "data:image/jpeg;base64,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",
});

// 1. Існує 3 сценарії для створення сутностей A, B, C опишіть фабрику, що створить
// кожен з екземплярів відповідно до умови
// A - text має всі літери великого розміру ACDDSA
// B - text має довжину не більше 5 символів
// С - text є типом Number

class A {
  constructor(text) {
    this.text = text;
  }
}

class B {
  constructor(text) {
    this.text = text;
  }
}

class C {
  constructor(text) {
    this.text = text;
  }
}

class Factory2 {
  static cases = {
    A,
    B,
    C,
  };

  static check = {
    A: (text) => {
      if (typeof text !== "string") return false;

      const arrayOfText = text.split("");
      return arrayOfText.every((el) => el === el.toUpperCase());
    },
    B: (text) => text.length <= 5,
    C: (text) => typeof text === "number",
  };

  constructor({ text }) {
    // return new Factory2.cases[
    //   (Factory2.check.A(text) && A.name) ||
    //     (Factory2.check.B(text) && B.name) ||
    //     (Factory2.check.C(text) && C.name)
    // ](text);

    for (let key in Factory2.check) {
      if (Factory2.check[key](text)) return new Factory2.cases[key](text);
    }
  }
}

const a = new Factory2({ text: "AAAAAA" });
const b = new Factory2({ text: "bbbb" });
const c = new Factory2({ text: 123 });

console.log(a, b, c, "result");

class Factory3 {
  static cases = {
    A,
    B,
  };

  static check = {
    A: (data) => (data.a ? true : false),
    B: (data) => Object.values(data).every((e) => typeof e === "string"),
  };

  constructor(data) {
    return new Factory3.cases[
      (Factory3.check.A(data) && A.name) || (Factory3.check.B(data) && B.name)
    ](data);
  }
}

const a1 = new Factory3({ a: 10 });
const b1 = new Factory3({ b: "msmsmssm", msg: "Hello"});

console.log(a1, b1, "RESULTS!!!");