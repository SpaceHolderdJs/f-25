class App {
  static API_KEY = "417a5eb3d1mshed972e378934e9ap106f51jsn2f50fcd2d0fc";
  static SEARCH_URL =
    "https://online-movie-database.p.rapidapi.com/auto-complete?q=";

  static DEFAULT_HEADERS = {
    "X-RapidAPI-Key": App.API_KEY,
    "X-RapidAPI-Host": "online-movie-database.p.rapidapi.com",
  };

  static searchButton = document.querySelector("#search-button");
  static input = document.querySelector("input");
  static output = document.querySelector("section");

  static watchListSwitcher = document.querySelector("#watch-list-switcher");
  static watchListOutput = document.querySelector("#watchList");
  static watchListRandomButton = document.querySelector("#random-film-button");

  constructor(data = [], watchList = []) {
    this.data = data;
    this.watchList = watchList;

    App.searchButton.onclick = () => this.onButtonClick();
    App.watchListSwitcher.onclick = () => this.renderWatchlist();
    App.watchListRandomButton.onclick = () =>
      console.log(this.getRandomFilm(), "!!!!");
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

  getRandomFilm() {
    const watchList = this.getWatchListData();
    return watchList[Math.floor(Math.random() * watchList.length)];
  }

  getWatchListData() {
    return JSON.parse(localStorage.getItem("watchList") || "[]");
  }

  addWatchlistData(film) {
    const oldWatchList = this.getWatchListData();
    localStorage.setItem("watchList", JSON.stringify([...oldWatchList, film]));
  }

  removeWatchListData(id) {
    const oldWatchList = this.getWatchListData();
    localStorage.setItem(
      "watchList",
      JSON.stringify([...oldWatchList].filter((film) => film.id !== id))
    );
  }

  checkIfWathclistContainsFilm(id) {
    return this.getWatchListData().find((film) => film.id === id)
      ? true
      : false;
  }

  renderData(
    dataToRender,
    outputElement = App.output,
    isUsingAsWatchList = false
  ) {
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

      const isFilmAddedToWatchList = this.checkIfWathclistContainsFilm(id);

      outputElement.innerHTML += `<div class="film-elem">
        <img src="${imageUrl}" />
        <h3>${title}</h3>
        <span>Rating: ${rank}</span>
        <span>Actors: ${actors}</span>
        <span>Year: ${year || "unknown"}</span>
        <button class="film-button">${
          isFilmAddedToWatchList ? "DeleteFromWatchList" : "AddToWatchLater"
        }</button>
      </div>`;
    });

    const filmsButtons = document.querySelectorAll(".film-button");
    [...filmsButtons].forEach((btn, i) => {
      btn.onclick = () => {
        const currentFilm = dataToRender[i];

        if (this.checkIfWathclistContainsFilm(currentFilm.id)) {
          this.removeWatchListData(currentFilm.id);

          isUsingAsWatchList &&
            this.renderData(this.getWatchListData(), App.watchListOutput, true);

          btn.textContent = "AddToWatchLater";
        } else {
          this.addWatchlistData(currentFilm);
          btn.textContent = "DeleteFromWatchList";
        }
      };
    });
  }

  renderWatchlist() {
    App.output.style.visibility = "hidden";
    App.watchListOutput.style.visibility = "visible";

    const watchListData = this.getWatchListData();

    this.renderData(watchListData, App.watchListOutput, true);
  }
}

new App();
