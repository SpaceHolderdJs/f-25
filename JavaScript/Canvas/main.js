const canvas = document.getElementsByTagName("canvas")[0];

const ctx = canvas.getContext("2d");

// ctx.rect(100, 5, 50, 50);
// ctx.arc(200, 80, 10, 20, 40);
// // ctx.fillRect(100, 100, 40, 40);

// console.log(ctx, "!!!");

// ctx.fill();

// ctx.beginPath();
// ctx.strokeStyle = "blue";
// ctx.lineWidth = 10;
// ctx.moveTo(10, 20);
// ctx.lineTo(10, 50);
// ctx.closePath();
// ctx.stroke();

// ctx.beginPath();
// ctx.lineWidth = 5;
// ctx.moveTo(10, 20);
// ctx.strokeStyle = "red";
// ctx.lineTo(50, 80);
// ctx.closePath();
// ctx.stroke();

// const words = ["Hello world", "Hello all", "Hello"];

// words.forEach((word, i) => {
//   ctx.fillText(word, 30, 10 + i * 20);
// });

for (let i = 0; i < 10; i++) {
  setInterval(() => {
    const isOdd = i % 2;
    ctx.fillRect(10 + i * 10, isOdd ? 10 : 20, 10, 10);
  }, 500);
}

// ctx.font = "50px";
// ctx.fillText("Hello all!!!", 50, 100);

ctx.fill();

//canvasjs lib
window.onload = () => {
  const dataPoints = [
    { y: 100 },
    { y: 300 },
    { y: 50 },
    { y: 500 },
    { y: 200 },
  ];

  console.log(CanvasJS, "canvasjs");

  const chart = new CanvasJS.Chart("charts", {
    animationEnabled: true,
    theme: "light2",
    title: {
      text: "Charts",
    },
    data: [
      { type: "line", dataPoints },
      {
        type: "line",
        dataPoints: [{ y: 10 }, { y: 200 }, { y: 150 }, { y: 150 }, { y: 150 }],
      },
    ],
  });

  chart.render();
};
