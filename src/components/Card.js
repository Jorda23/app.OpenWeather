import React from "react";
import Spinner from "./Spinner";

const Card = ({loadingData, showData, weather, forecast}) => {

    //variables para la fecha
    var today = new Date();
    const day =  ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday",  "Friday", "Saturday"];
    const month = ["Jan", "Feb", "Mar","Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    var year = today.getFullYear();
    var date = day[today.getDay()] + ' ' + month[today.getMonth()] + ' ' + year;
   

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

    //condicion de cargador de busqueda
    if(loadingData){
        return <Spinner />;
    }

    //condicion para mostrar el clima
    if(showData){
        url = "http://openweathermap.org/img/w/";
        iconUrl = url + weather.weather[0].icon + ".png";

        iconUrl3 = url + forecast.list[1].weather[0].icon + ".png";
        iconUrl6 = url + forecast.list[2].weather[0].icon + ".png";
        iconUrl9 = url + forecast.list[3].weather[0].icon + ".png";
        iconUrl12 = url + forecast.list[4].weather[0].icon + ".png";

        forecastDate3 = forecast.list[1].dt_txt.substring(8, 10) + '/' + forecast.list[1].dt_txt.substring(5, 7) + '/' + forecast.list[1].dt_txt.substring(0, 4) + ' ' +  forecast.list[1].dt_txt.substring(11, 13);
        forecastDate6 = forecast.list[2].dt_txt.substring(8, 10) + '/' + forecast.list[2].dt_txt.substring(5, 7) + '/' + forecast.list[2].dt_txt.substring(0, 4) + ' ' +  forecast.list[2].dt_txt.substring(11, 13);
        forecastDate9 = forecast.list[3].dt_txt.substring(8, 10) + '/' + forecast.list[3].dt_txt.substring(5, 7) + '/' + forecast.list[3].dt_txt.substring(0, 4) + ' ' +  forecast.list[3].dt_txt.substring(11, 13);
        forecastDate12 = forecast.list[4].dt_txt.substring(8, 10) + '/' + forecast.list[4].dt_txt.substring(5, 7) + '/' + forecast.list[4].dt_txt.substring(0, 4) + ' ' +  forecast.list[4].dt_txt.substring(11, 13);
    }

    return(
        <div className="mt-5">
            {
                showData === true ? (
                    <div className="container">
                        <div className="card2 mx-auto">
                            <div className="row g-0">
                                <div className="col-md-4">
                                        <p className="text-for-img">The Only Weather Forecast You Need</p>
                                         <img src="https://images.unsplash.com/photo-1551582045-6ec9c11d8697?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=465&q=80" className="imagen rounded-start" alt="..."/>
                                </div>
                                <div className="col-md-8">
                                    <div className="card-body2 text-pred">
                                        <h3 className="card-title">{weather.name}</h3>
                                        <p className="card-date-Principal">{date}</p> 
                                        <h1 className="card-temp">{(weather.main.temp  - 273.15).toFixed(1)}ºC</h1>
                                        <p className="card-desc"><img src={iconUrl} alt="icon"/>{weather.weather[0].description}</p>
                                       
                                       <ul className="Card-Text-Body">
                                        <h5 className="card-text">Max Temp: {(weather.main.temp_max - 273.15).toFixed(1)}ºC</h5>
                                        <h5 className="card-text">Min Temp: {(weather.main.temp_min - 273.15).toFixed(1)}ºC</h5>
                                        <h5 className="card-text">Humidity: {weather.main.humidity}%</h5>
                                        <h5 className="card-text">Wind Speed: {weather.wind.speed}m/s</h5>
                                        </ul>
                                    </div>
                                    <hr/>
                                
                                    <div className="container-predition">
                                        <div className="col-container">
                                            <p class="date-predition">{forecastDate3}h</p>
                                            <p className="description"><img src={iconUrl3} alt="icon"/>{forecast.list[1].weather[0].description}</p>
                                            <p className="temp">{(forecast.list[1].main.temp - 273.15).toFixed(1)}ºC</p>
                                        </div>
                                        <div className="col-container">
                                            <p class="date-predition">{forecastDate6}h</p>
                                            <p className="description"><img src={iconUrl6} alt="icon"/>{forecast.list[2].weather[0].description}</p>
                                            <p className="temp">{(forecast.list[2].main.temp - 273.15).toFixed(1)}ºC</p>
                                        </div>
                                        <div className="col-container">
                                            <p class="date-predition">{forecastDate9}h</p>
                                            <p className="description"><img src={iconUrl9} alt="icon"/>{forecast.list[3].weather[0].description}</p>
                                            <p className="temp">{(forecast.list[3].main.temp - 273.15).toFixed(1)}ºC</p>
                                        </div>
                                        <div className="col-container">
                                            <p class="date-predition">{forecastDate12}h</p>
                                            <p className="description"><img src={iconUrl12} alt="icon"/>{forecast.list[4].weather[0].description}</p>
                                            <p className="temp">{(forecast.list[4].main.temp - 273.15).toFixed(1)}ºC</p>
                                        </div>

                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                ):(
                    <h2 className="text-light">No data yet</h2>
                )
            }
        </div>
    );
}

export default Card;