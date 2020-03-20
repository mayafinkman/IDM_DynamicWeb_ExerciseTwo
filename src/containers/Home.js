import React, { useEffect, useState } from 'react'; //state allows us to track the data flow through the application
import axios from 'axios';

import { useHistory } from "react-router-dom";
import WeatherImage from "../components/WeatherImage";
import Header from "../components/Header";
import HeaderImage from "../components/HeaderImage";

//API keys
const defaultKey = "bf51228f98f258e444dcebb583558d21";

function Home() {
    const[weatherData, setWeatherData] = useState({});
    const [city, setCity] = useState("");
    const[cloudiness, setCloudiness] =  useState("");
    const[currentTemperature, setCurrentTemperature] =  useState("");
    const[highTemp, setHighTemp] =  useState("");
    const[lowTemp, setLowTemp] =  useState("");
    const[humidity, setHumidity] =  useState("");
    const[windSpeed, setWindSpeed] =  useState("");
    const [weatherType, setWeatherType] = useState("Clouds");

    let history = useHistory();

    useEffect(() => {
        //get city from url
        let searchParams = history.location.search;
        let urlParams = new URLSearchParams(searchParams);
        let city = urlParams.get("city");
        if (city) {
            setCity(city);
            //console.log(city);
        }
    }, [history]); //resets each time history changes

    useEffect(() => {
        axios.get(
        )
            .then(function (response) {
                setWeatherData(response.data);
            })
            .catch(function (error) {
            });
    }, [city]); //runs every time city changes
    useEffect(() => {
        //make request for weather by city
        axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=imperial&appid=${"bf51228f98f258e444dcebb583558d21"}`)//need https because accessing remote server
            .then(function(response){
                setWeatherData(response.data);
            })
            .catch(function(error) {
                console.log(error);
            });      
    },[city]); //brackets are parameters on which useEffect gets run, if empty only runs once with first page render
    
    useEffect(() => { //way of updating the variables each time they update,  as well as making sure it does not throw an error  when page  first runs and object is undefined
        if(weatherData.main)
        {
            setCurrentTemperature(weatherData.main.temp);
            setHighTemp(weatherData.main.temp_max);
            setLowTemp(weatherData.main.temp_min);
            setHumidity(weatherData.main.humidity);
        }
        if(weatherData.wind)
        {
            setWindSpeed(weatherData.wind.speed);
        }
        if(weatherData.weather && weatherData.weather)
        {
            setWeatherType(weatherData.weather[0].main);
        }
        if(weatherData.clouds)
        {
            setCloudiness(weatherData.clouds.all/200);
        }

    }, [weatherData]);

    return (
        <div className="Home" style={{ backgroundColor: `rgba(0,0,0,${cloudiness})` }}>
            <div className="CityImage">
                <HeaderImage city={city} /> 
            </div>
            <h1>Weather in {city}</h1>
            <div className="WeatherInfo">
                <div className="WeatherInfo_Image">
                    <WeatherImage weatherType={weatherType}/>
                </div>
                <div className="WeatherInfo_Data">
                    <div className="CurrentTemperature">
                        <p className="CurrentTemperatureTemp"> {currentTemperature} &#176;</p> 
                        <p className="CurrentTemperatureLabel">Current Temperature</p>
                    </div>

                    <div className="OtherTemperatures">
                        <p>High temp: <strong> {highTemp} &#176;</strong></p>
                        <p>Low temp: <strong> {lowTemp} &#176;</strong></p>
                    </div>
                    <p>Humidity: {humidity}%</p>
                    <p>Wind: {windSpeed}mph</p>
                </div>
            </div>
        </div>
    );
}

export default Home;