import React from 'react'
import './WeatherApp.css'

import search_icon from '../Assets/search.png'
import cloud_icon from '../Assets/cloud.png'
import clear_icon from '../Assets/clear.png'
import drizzle_icon from '../Assets/drizzle.png'
import humidity_icon from '../Assets/humidity.png'
import rain_icon from '../Assets/rain.png'
import snow_icon from '../Assets/snow.png'
import wind_icon from '../Assets/wind.png'

const WeatherApp = () => {
    let api_key = "8e5a969b419eb09f174048a8f9faf1d8";

    const search = async () => {
        const element = document.getElementsByClassName("city")
        if (element.value === "") {
             return 0;
        }
        let url = `https://api.openweathermap.org/data/2.5/weather?q=${element[0].value}&units=Metric&appid=${api_key}`;

        let response = await fetch(url);
        let data = await response.json();

        humidity.innerHTML = data.main.humidity;
        wind.innerHTML = data.wind.speed;
        temprature.innerHTML = data.main.temp;
        location.innerHTML = data.name;
    }

    return (
        <div className='container'>
            <div className='top-bar'>
                <input type='text' className='cityInput' placeholder='Search' />
                <div className='search-icon' onClick={() => search()}>
                    <img src={search_icon} alt='' />
                </div>
            </div>
            <div className='weather-image'>
                <img src={cloud_icon} alt='' />
            </div>
            <div className='weather-temp'>24'c</div>
            <div className='weather-location'>London</div>
            <div className='data-container'>
                <div className='element'>
                    <img src={humidity_icon} alt=' ' className='icon' />
                    <div className='data'>
                        <div className='humidity-percent'>64%</div>
                        <div className='text'> Huminidty</div>
                    </div>
                </div>
                <div className='element'>
                    <img src={wind_icon} alt=' ' className='icon' />
                    <div className='data'>
                        <div className='wind-rate'>18 km/h</div>
                        <div className='text'> Wind Speed</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default WeatherApp
