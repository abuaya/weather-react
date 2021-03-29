import React from "react";
import axios from 'axios';

export default function Weather (props) {
  function handleResponse (response) {
    alert(`The weather in New York is ${response.data.main.temp}°C`);
  }
  
let apiKey = `a05b99834a4c4393485b5df92793ef0c`;
let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.city}&appid=${apiKey}&units=metric`;

axios.get(apiUrl).then(handleResponse);
  return <h2>
     Hello there
    
  </h2>;
}