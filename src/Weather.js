import React,{useState} from "react";
import axios from 'axios';

export default function WeatherSearch(){
    let [loaded, setLoaded] = useState(false);
    let [city, setCity] = useState("");
    let [weather, setWeather] = useState ({});
    

    function displayWeather(response){
        console.log(response.data);
        setLoaded (true);
        setWeather({
            
            temperature: response.data.main.temp,
            wind: response.data.wind.speed,
            humidity: response.data.main.humidity,
            icon: `https://openweathermap.org/img/wn/${response.data.weather[0].icon}@2px.png`,
            description: response.data.weather[0].description
        });
        }

    function handleSubmit(event){
        event.preventDefault();
        let units = "metric";
        let apiKey = "094780c710fa4efd669f0df8c3991927";
        let apiUrl =  `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=${units}`;
        axios.get(apiUrl).then(displayWeather);
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
        {form}
         <br/>
         <br/>
         <strong>{city}</strong>
        
                <ul>
                    <li>Temperature: {Math.round(weather.temperature)} C</li>
                     <li>Description: {weather.description}</li>
                      <li>Humidity: {weather.humidity}% </li>
                       <li>Wind: {weather.wind}km/h</li>
                       <li><img src={weather.icon} alt={weather.description}/></li>
                </ul>
            </div>
        );
    }else{
        return form;
    }
}