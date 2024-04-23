import React, { useState } from "react";
import axios from 'axios';

export default function WeatherDay (){
    let [loaded, setLoaded] = useState (false);
    let [city, setCity] = useState("");
    let [timestamp, setTimestamp]= useState(null);
}

function displayWeatherDay (response){
    setLoaded(true);
    setTimestamp({
        temperatureMax: response.data.main.temp_max,
        temperatureMin: response.data.main.temp_min,
        icon:`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=${units}`;
        windSpeed: response.data.wind.speed
    })

    function timestamp(Date){
        let hours = Date.getHours();
        let minutes = Date.getMinutes();
        let days = []
    }


}
function handleSubmit(event){
    event.preventDefault();
    let units = "metric";
    let apiKey = "094780c710fa4efd669f0df8c3991927";
    let apiUrl =  `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=${units}`;
    axios.get(apiUrl).then(displayWeatherDay);
}

function updateSearch(event){
    setCity(event.target.value);
}

let form =(
    <form onSubmit={handleSubmit}>
            <input type="search" placeholder="Enter location.. " onChange={updateSearch}/>
            <button type="submit">Search</button>
        </form>
    );
    if (loaded){
        return(
            <div>

            </div>
        )
    }


