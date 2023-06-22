window.addEventListener("load", () => {
  const videos = [
    { title: "Title1", src: "./videos/video-1.mp4" },
    { title: "Title2", src: "./videos/video-2.mp4" },
    { title: "Title3", src: "./videos/video-1.mp4" },
  ];

  let currentVideoIndex = 0;

  const videoElement = document.querySelector("#video");
  const h1 = document.querySelector("h1");

  const prev = document.querySelector("#prev");
  const next = document.querySelector("#next");

  setVideo(currentVideoIndex);

  document.body.addEventListener("click", () => {
    videoElement.play();
  });

  function setVideo(index, delay = 0) {
    const action = () => {
      const { src, title } = videos[index];
      videoElement.src = src;
      h1.textContent = title;

      videoElement.play();
    };
    delay ? setTimeout(() => action(), delay) : action();
  }

  prev.onclick = () => {
    currentVideoIndex--;

    if (videos[currentVideoIndex]) {
      setVideo(currentVideoIndex, 1000);
    } else {
      currentVideoIndex = videos.length - 1;
      setVideo(currentVideoIndex, 1000);
    }
  };

  next.onclick = () => {
    currentVideoIndex++;

    if (videos[currentVideoIndex]) {
      setVideo(currentVideoIndex, 1000);
    } else {
      currentVideoIndex = 0;
      setVideo(currentVideoIndex, 1000);
    }
  };
});
