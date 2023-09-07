// https://home.openweathermap.org/
// KEY: 6409ee75b6ffc020adb31a565296a4bb
// http://openweathermap.org/img/w/${iconcode}.png
// 03n

function OpenWeatherMapData(city) {
  const KEY = `6409ee75b6ffc020adb31a565296a4bb`;
  const links = [
    `https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=metric&appid=${KEY}`,
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${KEY}`,
  ];

  fetch(links[1])
    .then((res) => res.json())
    .then((data) => console.log(data, "OpenWeatherMapData"))
    .catch((err) => console.error(err, "Error with OpenWeatherMapData"));
}

OpenWeatherMapData("Kyiv");

function WeatherApiDotCom(city, days) {
  const KEY = "2ecc6a18f1msh149a8c93469a116p1ff3e3jsn92ea038f0326";
  const url = `https://weatherapi-com.p.rapidapi.com/forecast.json?q=${city}&days=${days}`;
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": KEY,
      "X-RapidAPI-Host": "weatherapi-com.p.rapidapi.com",
    },
  };

  fetch(url, options)
    .then((res) => res.json())
    .then((data) => {
      // const result = data.forecast.forecastday.map((d) => {
      //   console.log(d, "DAY");

      //   for (let key in d.day) {
      //     console.log(key, d.day[key], "day item");
      //     return `<h1>${key}:${d.day[key]}</h1>`;
      //   }
      // });

      // console.log(result, "render Result");
      console.log(data, "WeatherApiDotCom");
    })
    .catch((err) => console.error(err, "Error with WeatherApiDotCom"));
}

WeatherApiDotCom("Kiev", 3);

// No icons (could be taken from other APIS)
function YahhoWeatherApi(city) {
  const KEY = "2ecc6a18f1msh149a8c93469a116p1ff3e3jsn92ea038f0326";
  const url = `https://yahoo-weather5.p.rapidapi.com/weather?location=${city}&format=json&u=c`;
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": KEY,
      "X-RapidAPI-Host": "yahoo-weather5.p.rapidapi.com",
    },
  };

  fetch(url, options)
    .then((res) => res.json())
    .then((data) => console.log(data, "YahhoWeatherApi"))
    .catch((err) => console.error(err, "Error with YahhoWeatherApi"));
}

YahhoWeatherApi("Kyiv");
