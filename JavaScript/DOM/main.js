//DOM - document object model

window.onload = () => {
  // const h1 = document.getElementById("h1");
  // console.log(h1, "h1");
  // h1.textContent = "Hello World";

  // const spans = document.getElementsByTagName("span");
  // console.log(spans, "spans");

  // const spansWithNames = document.getElementsByName("span");

  // [...spansWithNames].forEach((el) => el.style.color = "red" );

  // [...spans].forEach((el, i) => {
  //     el.textContent = i;
  // });

  // const allElements = [...document.querySelectorAll("*")];

  // allElements.forEach((el) => el.style.fontSize = "100px" );

  // const h1 = document.querySelector("h1");
  // const wrapper = document.querySelector("#wrapper");

  // const incrementButton = document.querySelector("#increment");
  // const decrementButton = document.querySelector("#decrement");
  // const resetButton = document.querySelector("#reset");

  // let counter = 0;

  // incrementButton.onclick = () => {
  //    counter = counter + 1;
  //    h1.textContent = counter;
  //    onChangeCounter();
  // }

  // decrementButton.onclick = () => {
  //     counter = counter - 1;
  //     h1.textContent = counter;
  //     onChangeCounter();
  // }

  // resetButton.onclick = () => {
  //     counter = 0;
  //     h1.textContent = counter;
  //     onChangeCounter();
  // }

  // const onChangeCounter = () => {
  //     document.body.style.background = `rgb(${counter * 10}, ${counter * 10}, ${counter * 10})`;
  // }

  const addSquareButton = document.getElementById("addSquare");

  class Square {
    constructor(size, color, textContent) {
      this.size = size;
      this.color = color;
      this.textContent = textContent;
      this.element = document.createElement("div");

      this.element.textContent = textContent;
      this.element.style.width = this.size + "px";
      this.element.style.height = this.size + "px";
      this.element.style.background = this.color;
      this.element.className = "square";
    }

    render(htmlElement) {
      htmlElement.appendChild(this.element);
    }

    delete(htmlElement) {
      htmlElement.removeChild(this.element);
    }

    changeText(text) {
      this.textContent = text;
      this.element.textContent = text;
    }
  }

  let counter = 0;

  const colorsOfSquare = ["black", "lightskyblue", "lime"];

  const getRandomColor = (arr) => {
    const randomNumber = Math.floor(Math.random() * arr.length);
    return arr[randomNumber];
  };

  addSquareButton.onclick = () => {
    const square = new Square(100, getRandomColor(colorsOfSquare), counter);
    square.render(document.body);

    square.changeText("Hello" + " " + counter);

    square.element.onclick = () => {
      square.delete(document.body);
      counter = 0;
    };

    counter = counter + 1;
  };

  const addText = (text) => {
    const span = document.createElement("span");
    span.textContent = text;

    document.body.appendChild(span);
  };
};

window.onblur = () => {
    document.title = "Hey, come back!";
}

window.onfocus = () => {
    document.title = "Focused";
}

window.onclose = () => {
    
}

const googleButton = document.querySelector("#google-button");

googleButton.onclick = () => {
    // window.open("https://google.com");
    // window.location = "https://google.com";
}

// setTimeout(() => {
//     // window.location = "https://google.com";
//     window.open("https://google.com");
// }, 2000)
