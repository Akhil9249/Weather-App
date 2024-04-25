import React, { createContext, useEffect, useState } from 'react'
import axios from "axios";

export const WeatherContext = createContext()

export const WeatherProvider = ({children}) => {


    
    const [weatherSearch, setWeatherSearch] = useState("India");
    const [weather, setWeather] = useState({});
    const [weatherLocation, setWeatherLocation] = useState({});
    const [weatherCurrentDate, setWeatherCurrentDate] = useState("");
    const [weatherCurrentTime, setWeatherCurrentTime] = useState([]);


    const search = (event) => {
        setWeatherSearch(event.target.value);
    };

    const searchSubmit = async (event) => {
        event.preventDefault();
        const response = await axios(
            `http://api.weatherapi.com/v1/current.json?key=542e3558a43d4510b3e173051240104&q=${weatherSearch}&aqi=yes`
        );
        setWeather(response.data.current);
        setWeatherLocation(response.data.location);
    };

    const getweather = async () => {
        console.log("timezone 2");
        const response = await axios(
            `http://api.weatherapi.com/v1/current.json?key=542e3558a43d4510b3e173051240104&q=INDIA&aqi=yes`
        );

        console.log("timezone 1");
        console.log(response,"==response");
        // console.log(weatherCurrentDate, "==weatherCurrentDate");

        let dateTimeString = response.data.current.last_updated;

        // Split the date and time
        let parts = dateTimeString.split(" ");
        let datePart = parts[0];
        let timePart = parts[1];
        let parts2 = timePart.split(":");
        let datePart2 = parts2[0];

        console.log("Date: ", datePart);
        console.log("Time: ", timePart);
        console.log("Date: ", datePart2);

        const responses = await axios(
            `http://api.weatherapi.com/v1/history.json?key=542e3558a43d4510b3e173051240104&q=INDIA&dt=${datePart}&aqi=yes`
        );

        console.log(responses,"==responsessss");

        console.log(responses.data.forecast.forecastday[0],"=======================");
        let result = responses.data.forecast.forecastday[0].hour;
        let filterResult = result.filter((data, index) => index >= datePart2);
        let filterResultOg = filterResult.filter((data, index) => index < 5);
        console.log(filterResultOg);
        setWeatherCurrentTime(filterResultOg);

        setWeatherCurrentDate(response.data.current.last_updated);

        setWeather(response.data.current);
        setWeatherLocation(response.data.location);
    };


    // const getweather = async () => {
    //     console.log("timezone 2");
    //     const response = await axios(
    //         `http://api.weatherapi.com/v1/current.json?key=542e3558a43d4510b3e173051240104&q=INDIA&aqi=yes`
    //     );

    //     console.log("timezone 1");
    //     // console.log(weatherCurrentDate, "==weatherCurrentDate");

    //     let dateTimeString = response.data.current.last_updated;

    //     // Split the date and time
    //     let parts = dateTimeString.split(" ");
    //     let datePart = parts[0];
    //     let timePart = parts[1];
    //     let parts2 = timePart.split(":");
    //     let datePart2 = parts2[0];

    //     console.log("Date: ", datePart);
    //     console.log("Time: ", timePart);
    //     console.log("Date: ", datePart2);

    //     const responses = await axios(
    //         `http://api.weatherapi.com/v1/history.json?key=542e3558a43d4510b3e173051240104&q=INDIA&dt=${datePart}&aqi=yes`
    //     );

    //     // console.log(responses.data.forecast.forecastday[0].hour);
    //     let result = responses.data.forecast.forecastday[0].hour;
    //     let filterResult = result.filter((data, index) => index >= datePart2);
    //     let filterResultOg = filterResult.filter((data, index) => index < 5);
    //     console.log(filterResultOg);
    //     setWeatherCurrentTime(filterResultOg);

    //     setWeatherCurrentDate(response.data.current.last_updated);

    //     setWeather(response.data.current);
    //     setWeatherLocation(response.data.location);
    // };


    return <WeatherContext.Provider value={{weatherSearch,weather,weatherLocation,weatherCurrentDate,weatherCurrentTime,getweather,search,searchSubmit}}>{children}</WeatherContext.Provider>

}


