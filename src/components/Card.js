import React from "react";
import Spinner from "./Spinner";
import { useTranslation } from "react-i18next";

const Card = ({ loadingData, showData, weather, forecast }) => {
  const [t, i18n] = useTranslation("global");
  //variables para la fecha
  var today = new Date();
  const day = [
    t("card.week1"),
    t("card.week2"),
    t("card.week3"),
    t("card.week4"),
    t("card.week5"),
    t("card.week6"),
    t("card.week7"),
  ];
  const month = [
    t("card.month1"),
    t("card.month2"),
    t("card.month3"),
    t("card.month4"),
    t("card.month5"),
    t("card.month6"),
    t("card.month7"),
    t("card.month8"),
    t("card.month9"),
    t("card.month10"),
    t("card.month11"),
    t("card.month12"),
  ];
  var year = today.getFullYear();
  var date = day[today.getDay()] + " " + month[today.getMonth()] + " " + year;

  //variables a usar para los iconos del clima
  var url = "";
  var iconUrl = "";

  var iconUrl3 = "";
  var iconUrl6 = "";
  var iconUrl9 = "";
  var iconUrl12 = "";

  var forecastDate3 = "";
  var forecastDate6 = "";
  var forecastDate9 = "";
  var forecastDate12 = "";

  //variable para grupos de clima(main)
  var main2={
  "Thunderstorm": t("card.ThunderstormDic"),
  "Drizzle": t("card.DrizzleDic"),
  "Rain": t("card.RainDic"),
  "Snow": t("card.SnowDic"),
  "Mist": t("card.MistDic"),
  "Smoke": t("card.SmokeDic"),
  "Haze": t("card.HazeDic"),
  "Dust": t("card.DustDic"),
  "Fog": t("card.FogDic"),
  "Sand": t("card.SandDic"),
  "Ash": t("card.AshDic"),
  "Squall": t("card.SquallDic"),
  "Tornado": t("card.TornadoDic"),
  "Clear": t("card.ClearDic"),
  "Clouds": t("card.CloudsDic")
  };

  //variable para descripcion de clima(description)
  var DicWeather={
    "thunderstorm with light rain": t("card.Thunderstorm1"),
    "thunderstorm with rain": t("card.Thunderstorm2"),
    "thunderstorm with heavy rain": t("card.Thunderstorm3"),
    "light thunderstorm": t("card.Thunderstorm4"),
    "thunderstorm": t("card.Thunderstorm5"),
    "heavy thunderstorm": t("card.Thunderstorm6"),
    "ragged thunderstorm": t("card.Thunderstorm7"),
    "thunderstorm with light drizzle": t("card.Thunderstorm8"),
    "thunderstorm with drizzle": t("card.Thunderstorm9"),
    "thunderstorm with heavy drizzle": t("card.Thunderstorm10"),

    "light intensity drizzle": t("card.Drizzle1"),
    "drizzle": t("card.Drizzle2"),
    "heavy intensity drizzle": t("card.Drizzle3"),
    "light intensity drizzle rain": t("card.Drizzle4"),
    "drizzle rain": t("card.Drizzle5"),
    "heavy intensity drizzle rain": t("card.Drizzle6"),
    "shower rain and drizzle": t("card.Drizzle7"),
    "heavy shower rain and drizzle": t("card.Drizzle8"),
    "shower drizzle": t("card.Drizzle9"),

    "light rain": t("card.Rain1"),
    "moderate rain": t("card.Rain2"),
    "heavy intensity rain": t("card.Rain3"),
    "very heavy rain": t("card.Rain4"),
    "extreme rain": t("card.Rain5"),
    "freezing rain": t("card.Rain6"),
    "light intensity shower rain": t("card.Rain7"),
    "shower rain": t("card.Rain8"),
    "heavy intensity shower rain": t("card.Rain9"),
    "ragged shower rain": t("card.Rain10"),

    "light snow": t("card.Snow1"),
    "Snow": t("card.Snow2"),
    "Heavy snow": t("card.Snow3"),
    "Sleet": t("card.Snow4"),
    "Light shower sleet": t("card.Snow5"),
    "Shower sleet": t("card.Snow6"),
    "Light rain and snow": t("card.Snow7"),
    "Rain and snow": t("card.Snow8"),
    "Light shower snow": t("card.Snow9"),
    "Shower snow": t("card.Snow10"),
    "Heavy shower snow": t("card.Snow11"),

    "mist": t("card.Atmosphere1"),
    "Smoke": t("card.Atmosphere2"),
    "Haze": t("card.Atmosphere3"),
    "sand": t("card.Atmosphere4"),
    "fog": t("card.Atmosphere5"),
    "sand": t("card.Atmosphere6"),
    "dust": t("card.Atmosphere7"),
    "volcanic ash": t("card.Atmosphere8"),
    "squalls": t("card.Atmosphere9"),
    "Tornado": t("card.Atmosphere10"),

    "clear sky": t("card.Clouds1"),
    "few clouds": t("card.Clouds2"),
    "scattered clouds": t("card.Clouds3"),
    "broken clouds": t("card.Clouds4"),
    "overcast clouds": t("card.Clouds5")
  }

  //condicion de cargador de busqueda
  if (loadingData) {
    return <Spinner />;
  }

  //condicion para mostrar el clima
  if (showData) {
    url = "http://openweathermap.org/img/w/";
    iconUrl = url + weather.weather[0].icon + ".png";

    iconUrl3 = url + forecast.list[1].weather[0].icon + ".png";
    iconUrl6 = url + forecast.list[2].weather[0].icon + ".png";
    iconUrl9 = url + forecast.list[3].weather[0].icon + ".png";
    iconUrl12 = url + forecast.list[4].weather[0].icon + ".png";

    forecastDate3 =
      forecast.list[1].dt_txt.substring(8, 10) +
      "/" +
      forecast.list[1].dt_txt.substring(5, 7) +
      "/" +
      forecast.list[1].dt_txt.substring(0, 4) +
      " " +
      forecast.list[1].dt_txt.substring(11, 13);
    forecastDate6 =
      forecast.list[2].dt_txt.substring(8, 10) +
      "/" +
      forecast.list[2].dt_txt.substring(5, 7) +
      "/" +
      forecast.list[2].dt_txt.substring(0, 4) +
      " " +
      forecast.list[2].dt_txt.substring(11, 13);
    forecastDate9 =
      forecast.list[3].dt_txt.substring(8, 10) +
      "/" +
      forecast.list[3].dt_txt.substring(5, 7) +
      "/" +
      forecast.list[3].dt_txt.substring(0, 4) +
      " " +
      forecast.list[3].dt_txt.substring(11, 13);
    forecastDate12 =
      forecast.list[4].dt_txt.substring(8, 10) +
      "/" +
      forecast.list[4].dt_txt.substring(5, 7) +
      "/" +
      forecast.list[4].dt_txt.substring(0, 4) +
      " " +
      forecast.list[4].dt_txt.substring(11, 13);
  }

  return (
    <div className="mt-5">
      {showData === true ? (
        <div className="container">
          <div className="card2 mx-auto">
            <div className="row g-0">
              <div className="col-md-4">
                <p className="text-for-img">{t("card.mensaje")}</p>
                <img
                  loading="lazy"
                  src="https://images.unsplash.com/photo-1551582045-6ec9c11d8697?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=465&q=80"
                  className="imagen rounded-start"
                  alt="..."
                />
              </div>
              <div className="col-md-8">
                <div className="card-body2 text-pred">
                  <h3 className="card-title">{weather.name}</h3>
                  <p className="card-date-Principal">{date}</p>
                  <h1 className="card-temp">
                    {(weather.main.temp - 273.15).toFixed(1)}ºC
                  </h1>
                  <p className="card-desc">
                    <img src={iconUrl} alt="icon" />
                      { DicWeather[weather.weather[0].description] }
                  </p>

                  <ul className="Card-Text-Body">
                    <h5 className="card-text">
                    {t("card.MaxTemp")}: {(weather.main.temp_max - 273.15).toFixed(1)}ºC
                    </h5>
                    <h5 className="card-text">
                    {t("card.Min-Temp")}: {(weather.main.temp_min - 273.15).toFixed(1)}ºC
                    </h5>
                    <h5 className="card-text">
                    {t("card.Humidity-Status")}: {weather.main.humidity}%
                    </h5>
                    <h5 className="card-text">
                    {t("card.Wind-Speed")}: {weather.wind.speed}m/s
                    </h5>
                  </ul>
                </div>
                <hr />

                <div className="container-predition">
                  <div className="col-container">
                    <p class="date-predition">{forecastDate3}h</p>
                    <p className="description">
                      <img src={iconUrl3} alt="icon" />
                      { DicWeather[forecast.list[1].weather[0].description] }
                    </p>
                    <p className="temp">
                      {(forecast.list[1].main.temp - 273.15).toFixed(1)}ºC
                    </p>
                  </div>
                  <div className="col-container">
                    <p class="date-predition">{forecastDate6}h</p>
                    <p className="description">
                      <img src={iconUrl6} alt="icon" />
                      { DicWeather[forecast.list[2].weather[0].description] }
                    </p>
                    <p className="temp">
                      {(forecast.list[2].main.temp - 273.15).toFixed(1)}ºC
                    </p>
                  </div>
                  <div className="col-container">
                    <p class="date-predition">{forecastDate9}h</p>
                    <p className="description">
                      <img src={iconUrl9} alt="icon" />
                      { DicWeather[forecast.list[3].weather[0].description] }
                    </p>
                    <p className="temp">
                      {(forecast.list[3].main.temp - 273.15).toFixed(1)}ºC
                    </p>
                  </div>
                  <div className="col-container">
                    <p class="date-predition">{forecastDate12}h</p>
                    <p className="description">
                      <img src={iconUrl12} alt="icon" />
                      { DicWeather[forecast.list[4].weather[0].description] }
                    </p>
                    <p className="temp">
                      {(forecast.list[4].main.temp - 273.15).toFixed(1)}ºC
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <h2 className="text-light">{t("card.data")}</h2>
      )}
    </div>
  );
};

export default Card;
