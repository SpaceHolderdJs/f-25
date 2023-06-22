window.addEventListener("load", () => {
  let count = 0;

  $("#count+").click(() => {
    count++;
    $("#count").text(count);
  });

  $("#count-").click(() => {
    count--;
    $("#count").text(count);
  });

  const textElement = $("#text");

  $("#remove").click(() => {
    const arrayTextContent = textElement.text().split(" ");

    textElement.text(
      arrayTextContent
        .filter((e) => e !== "" && !e.includes("\n"))
        .slice(0, arrayTextContent.length - 1)
        .join(" ")
    );
  });
});
