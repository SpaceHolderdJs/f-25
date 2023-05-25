class App {
  static API_KEY = "2ecc6a18f1msh149a8c93469a116p1ff3e3jsn92ea038f0326";
  static SEARCH_URL =
    "https://online-movie-database.p.rapidapi.com/auto-complete?q=";

  static DEFAULT_HEADERS = {
    "X-RapidAPI-Key": App.API_KEY,
    "X-RapidAPI-Host": "online-movie-database.p.rapidapi.com",
  };

  static button = document.querySelector("button");
  static input = document.querySelector("input");
  static output = document.querySelector("section");

  constructor(data = [], watchList = []) {
    this.data = data;
    this.watchList = watchList;

    App.button.onclick = () => this.onButtonClick();
  }

  onInputChange() {}

  //start search
  onButtonClick() {
    console.log(App.input.value);
    this.getDataBySearch(App.input.value).then(() => {
      App.input.value = "";
      console.log("Data", this.data);

      this.renderData(this.data, App.output);
    });
  }

  async getDataBySearch(filmName = "") {
    try {
      const response = await fetch(App.SEARCH_URL + filmName, {
        headers: App.DEFAULT_HEADERS,
      });
      const data = await response.json();

      this.data = data.d ? data.d : [];
    } catch (e) {
      console.log(e, "error");
      alert("Query is invalid");
    }
  }

  renderData(dataToRender, outputElement = App.output) {
    outputElement.innerHTML = "";

    dataToRender.forEach((film) => {
      const {
        id,
        l: title,
        q,
        qid: type,
        rank,
        s: actors,
        y: year,
        i: imageData,
      } = film;
      const { imageUrl, width, height } = imageData || {
        imageUrl:
          "https://static.vecteezy.com/system/resources/previews/007/160/087/original/video-icon-video-symbol-play-video-sign-free-vector.jpg",
        width: 1000,
        height: 1000,
      };

      outputElement.innerHTML += `<div class="film-elem">
        <img src="${imageUrl}" />
        <h3>${title}</h3>
        <span>Rating: ${rank}</span>
        <span>Actors: ${actors}</span>
        <span>Year: ${year || "unknown"}</span>
      </div>`;
    });
  }

  renderWatchlist() {}
}

new App();
