// Обращение к API open weather

import axios from "axios";
import {ApiOpenWeather} from "../constants/constants";


// получение текущей погоды
export const getWeatherOpen = async (location) => {

    const {data} = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${location.latitude}&lon=${location.longitude}&lang=ru&appid=${ApiOpenWeather}&units=metric`);
    return data;
}

