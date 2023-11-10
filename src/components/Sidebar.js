import React, { useState, useEffect } from 'react';
import axios from 'axios';
import "./Sidebar.css";

const Sidebar = () => {
  const [city, setCity] = useState('');
  const [weather, setWeather] = useState(null);

  const apiKey = '449764ac36821fe576e0798dc6fc7cd0';

  const fetchWeather = (city) => {
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    axios
      .get(apiUrl)
      .then((response) => {
        setWeather(response.data);
      })
      .catch((error) => {
        console.error('Error fetching weather data:', error);
      });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetchWeather(city);
  };

  useEffect(() => {
    // Default city to display initially (you can set it to any default value)
    const defaultCity = 'Delhi';
    fetchWeather(defaultCity);
  }, []); // Empty dependency array to run only once on mount
    const getWeatherIcon = (iconCode) => {
    return `http://openweathermap.org/img/w/${iconCode}.png`;
    };
  return (
   
    <div className="sidebar project-card-view">
      <h2 className='wh2'>Weather</h2>
      <form onSubmit={handleSubmit}>
        <label className='labels'>
          Enter City Name:
          <input className='city'
            type="text"
            value={city}
            onChange={(e) => setCity(e.target.value)}
          />
        </label>
        <button type="submit">Get Weather</button>
      </form>
      {weather && (
        <div className='detail'>
          <p>City: {weather.name}</p>
          <p>Temperature: {weather.main.temp} °C</p>
          <p>Condition: {weather.weather[0].description}</p>
          <img className='wimg'
            src={getWeatherIcon(weather.weather[0].icon)}
            alt={weather.weather[0].description}
          />
        </div>
      )}
    </div>
   
  );
};

export default Sidebar;
